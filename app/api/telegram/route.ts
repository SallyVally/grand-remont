// app/api/telegram/route.ts
import { NextResponse } from "next/server"

type FormData = {
  name: string
  phone: string
  email?: string
  service: string
  message?: string
  agree: boolean
}

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json()
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json({ error: "Missing BOT_TOKEN or CHAT_ID" }, { status: 500 })
    }

    const message = `
🏠 *НОВАЯ ЗАЯВКА С САЙТА*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
${data.email ? `📧 *Email:* ${data.email}` : ""}
🔧 *Услуга:* ${data.service}
${data.message ? `💬 *Сообщение:* ${data.message}` : ""}
    `.trim()

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    })

    const json = await res.json()
    if (!json.ok) {
      return NextResponse.json({ error: json }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
