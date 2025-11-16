"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

type FormData = {
  name: string
  phone: string
  email?: string
  service: string
  message?: string
  agree: boolean
}

type Props = {
  onSubmit?: (data: FormData) => void
}

export default function EstimateRequest({ onSubmit }: Props) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "Косметический ремонт",
    message: "",
    agree: true,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Укажите имя"
    if (!form.phone.trim()) e.phone = "Укажите номер телефона"
    if (form.phone && !/^\+?[0-9 ()-]{6,}$/.test(form.phone)) e.phone = "Некорректный формат телефона"
    if (!form.agree) e.agree = "Нужно согласие на связь"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange =
    (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
      setForm((s) => ({ ...s, [k]: value }))
      setErrors((prev) => ({ ...prev, [k]: "" }))
    }

  const sendToServer = async (data: FormData) => {
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      const json = await res.json().catch(() => null)
      throw new Error(json?.error || `Server returned ${res.status}`)
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(form)
      } else {
        // вызов серверного роута — безопасно
        await sendToServer(form)
      }
      setSent(true)
    } catch (err) {
      console.error("Ошибка отправки заявки:", err)
      // можно показать пользователю сообщение об ошибке
      alert("Не удалось отправить заявку. Проверьте консоль и сервер.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    // ... (оставь твой JSX без изменений) ...
    <section id="request" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* левый блок - текст */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="accent-dot accent-dot-blue" />
              <span className="accent-dot accent-dot-green" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Получите смету и консультацию</h2>
            <p className="text-muted-foreground">Оставьте заявку — наш менеджер свяжется в течение рабочего дня и подготовит предварительную смету.</p>

            <ul className="space-y-3 mt-4">
              <li className="cs2-card p-3 rounded-lg flex items-start gap-3">
                <div className="text-primary font-bold">✓</div>
                <div className="text-sm text-foreground/90">Быстрый расчет по замерам</div>
              </li>
              <li className="cs2-card p-3 rounded-lg flex items-start gap-3">
                <div className="text-primary font-bold">✓</div>
                <div className="text-sm text-foreground/90">Персональный менеджер</div>
              </li>
              <li className="cs2-card p-3 rounded-lg flex items-start gap-3">
                <div className="text-primary font-bold">✓</div>
                <div className="text-sm text-foreground/90">Возможность встречи с прорабом</div>
              </li>
            </ul>
          </div>

          {/* форма */}
          <div className="glass p-6 rounded-lg">
            {sent ? (
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Спасибо — заявка отправлена</h3>
                <p className="text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                <Button onClick={() => setSent(false)} className="mt-2 bg-primary hover:bg-primary/90">Отправить ещё</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... поля формы (в точности как у тебя) ... */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs text-muted-foreground">Имя</span>
                    <input value={form.name} onChange={handleChange("name")} className="w-full mt-1 p-3 rounded-lg bg-background/60 border border-border/50 focus:outline-none" placeholder="Иван Иванов" aria-invalid={!!errors.name} />
                    {errors.name && <div className="text-destructive text-xs mt-1">{errors.name}</div>}
                  </label>

                  <label className="block">
                    <span className="text-xs text-muted-foreground">Телефон</span>
                    <input value={form.phone} onChange={handleChange("phone")} className="w-full mt-1 p-3 rounded-lg bg-background/60 border border-border/50 focus:outline-none" placeholder="+7 (999) 000-00-00" aria-invalid={!!errors.phone} />
                    {errors.phone && <div className="text-destructive text-xs mt-1">{errors.phone}</div>}
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs text-muted-foreground">E-mail (необязательно)</span>
                  <input value={form.email} onChange={handleChange("email")} className="w-full mt-1 p-3 rounded-lg bg-background/60 border border-border/50 focus:outline-none" placeholder="mail@site.ru" />
                </label>

                <label className="block">
                  <span className="text-xs text-muted-foreground">Услуга</span>
                  <select value={form.service} onChange={handleChange("service")} className="w-full mt-1 p-3 rounded-lg bg-background/60 border border-border/50 focus:outline-none">
                    <option>Косметический ремонт</option>
                    <option>Капитальный ремонт под ключ</option>
                    <option>Дизайнерский ремонт</option>
                    <option>Другое</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs text-muted-foreground">Коротко о задаче</span>
                  <textarea value={form.message} onChange={handleChange("message")} rows={4} className="w-full mt-1 p-3 rounded-lg bg-background/60 border border-border/50 focus:outline-none" placeholder="Площадь, этаж, какие работы интересуют..." />
                </label>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" checked={form.agree} onChange={handleChange("agree") as any} />
                  <div className="text-xs text-muted-foreground">Согласен на обработку персональных данных и связь по телефону</div>
                </label>
                {errors.agree && <div className="text-destructive text-xs">{errors.agree}</div>}

                <div className="flex items-center gap-3">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1" disabled={submitting}>
                    {submitting ? "Отправка..." : "Получить смету"}
                  </Button>
                  <Button variant="outline" onClick={() => { setForm({ name: "", phone: "", email: "", service: "Косметический ремонт", message: "", agree: true }); setErrors({}) }}>
                    Очистить
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
