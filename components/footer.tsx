import { Phone, MessageCircle, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacts" className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">ГРАНД</span>
              <span className="text-primary">РЕМОНТ</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Профессиональный ремонт квартир под ключ с гарантией качества
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Косметический ремонт</li>
              <li>Капитальный ремонт</li>
              <li>Дизайнерский ремонт</li>
              <li>Ремонт под ключ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:89529078366"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />8 (952) 907-83-66
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/79529078366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/alexmahotin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </li>
              <li className="text-muted-foreground">Ежедневно с 8:00 до 20:00</li>
              <li className="text-muted-foreground">Сб и Вс - выходной</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ГРАНД РЕМОНТ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
