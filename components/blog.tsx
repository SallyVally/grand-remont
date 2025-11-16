"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Почему строители ненавидят открытую планировку: инженерная правда",
    excerpt:
      "Разбираем, какие скрытые проблемы создает снос стен и почему архитекторы часто игнорируют реальность вентиляции и акустики.",
    category: "Планировка",
    readTime: "8 мин",
    image: "/open-plan-apartment-problems.jpg",
  },
  {
    id: 2,
    title: "Психология цвета в интерьере: как оттенки влияют на ваш сон и продуктивность",
    excerpt:
      "Научные исследования о том, почему синий цвет в спальне может улучшить сон на 30%, а желтый на кухне повышает аппетит.",
    category: "Дизайн",
    readTime: "6 мин",
    image: "/color-psychology-interior-bedroom.jpg",
  },
  {
    id: 3,
    title: "Скрытые дефекты новостроек: чек-лист от прораба с 15-летним стажем",
    excerpt:
      "15 неочевидных проблем, которые застройщики маскируют при сдаче. Проверьте это до подписания акта приема-передачи.",
    category: "Приемка",
    readTime: "12 мин",
    image: "/apartment-inspection-defects.jpg",
  },
  {
    id: 4,
    title: "Теплый пол: когда он бесполезен и даже вреден",
    excerpt:
      "Три типа напольных покрытий, которые нельзя использовать с теплым полом, и почему в детской он может быть опасен.",
    category: "Инженерия",
    readTime: "7 мин",
    image: "/underfloor-heating-problems.jpg",
  },
  {
    id: 5,
    title: "Как звукоизоляция может ухудшить акустику: парадокс современных квартир",
    excerpt: "Почему дорогие звукоизоляционные материалы иногда создают эффект 'аквариума' и как этого избежать.",
    category: "Акустика",
    readTime: "9 мин",
    image: "/soundproofing-apartment-acoustic.jpg",
  },
  {
    id: 6,
    title: "Умный дом: 5 технологий, которые устареют через 3 года",
    excerpt:
      "Анализ рынка IoT-устройств и прогноз, какие 'умные' решения станут бесполезными из-за смены стандартов связи.",
    category: "Технологии",
    readTime: "10 мин",
    image: "/smart-home-technology-obsolete.jpg",
  },
  {
    id: 7,
    title: "Минимализм vs максимализм: что дешевле в обслуживании через 5 лет",
    excerpt: "Реальный расчет затрат на поддержание двух противоположных стилей интерьера с учетом износа и моды.",
    category: "Экономика",
    readTime: "8 мин",
    image: "/minimalist-vs-maximalist-interior-cost.jpg",
  },
  {
    id: 8,
    title: "Вентиляция в квартире: почему пластиковые окна создали эпидемию плесени",
    excerpt:
      "Как герметичные окна нарушили естественную вентиляцию в старых домах и что с этим делать без дорогих систем.",
    category: "Инженерия",
    readTime: "11 мин",
    image: "/apartment-ventilation-mold-problem.jpg",
  },
  {
    id: 9,
    title: "Эргономика кухни: почему 'рабочий треугольник' устарел",
    excerpt: "Современные принципы планировки кухни, основанные на исследованиях движения и новых привычках готовки.",
    category: "Планировка",
    readTime: "7 мин",
    image: "/modern-kitchen-ergonomics-layout.jpg",
  },
  {
    id: 10,
    title: "Скандинавский стиль в России: почему он не работает без адаптации",
    excerpt:
      "Климатические и культурные особенности, которые делают прямое копирование скандинавского дизайна неудачным.",
    category: "Дизайн",
    readTime: "6 мин",
    image: "/scandinavian-style-russian-apartment.jpg",
  },
  {
    id: 11,
    title: "Электрика в квартире: 7 ошибок, которые приведут к пожару",
    excerpt: "Критические нарушения при монтаже проводки, которые электрики допускают 'для экономии времени'.",
    category: "Безопасность",
    readTime: "9 мин",
    image: "/electrical-wiring-fire-hazard-apartment.jpg",
  },
  {
    id: 12,
    title: "Как выбрать подрядчика: красные флаги в договоре и поведении",
    excerpt:
      "Юридические и психологические признаки недобросовестных строительных компаний на основе судебной практики.",
    category: "Выбор подрядчика",
    readTime: "13 мин",
    image: "/contractor-agreement-red-flags.jpg",
  },
  {
    id: 13,
    title: "Натяжные потолки: скрытые проблемы, о которых молчат установщики",
    excerpt:
      "Что происходит с воздухом между потолками, почему появляется конденсат и когда натяжной потолок противопоказан.",
    category: "Материалы",
    readTime: "8 мин",
    image: "/stretch-ceiling-problems-condensation.jpg",
  },
  {
    id: 14,
    title: "Ламинат vs паркет vs плитка: честное сравнение через 10 лет эксплуатации",
    excerpt:
      "Реальные фото и расчеты износа разных напольных покрытий в одинаковых условиях с учетом ремонтопригодности.",
    category: "Материалы",
    readTime: "10 мин",
    image: "/flooring-comparison-laminate-parquet-tile.jpg",
  },
  {
    id: 15,
    title: "Перепланировка: что можно делать без согласования (легально)",
    excerpt:
      "Актуальный список изменений в квартире, которые не требуют разрешения по новым строительным нормам 2024 года.",
    category: "Законодательство",
    readTime: "11 мин",
    image: "/apartment-renovation-legal-permits.jpg",
  },
  {
    id: 16,
    title: "Освещение в квартире: почему один источник света — это ошибка",
    excerpt:
      "Принципы многоуровневого освещения и как правильное распределение света влияет на восприятие пространства.",
    category: "Дизайн",
    readTime: "7 мин",
    image: "/lightning.jpg",
  },
  {
    id: 17,
    title: "Гипсокартон: когда он уместен, а когда это выброшенные деньги",
    excerpt:
      "Разбор ситуаций, где гипсокартонные конструкции оправданы, и где лучше использовать альтернативные решения.",
    category: "Материалы",
    readTime: "8 мин",
    image: "/gypso.jpg",
  },
  {
    id: 18,
    title: "Ремонт зимой vs летом: неожиданные плюсы холодного сезона",
    excerpt: "Почему некоторые виды работ лучше делать зимой, и как сэкономить до 20% на материалах в несезон.",
    category: "Планирование",
    readTime: "6 мин",
    image: "/weath.jpg",
  },
]

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPosts.length))
  }

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            БЛОГ О РЕМОНТЕ
            <span className="block text-primary mt-2">БЕЗ ВОДЫ И БАНАЛЬНОСТЕЙ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Честные материалы от практиков: инженерные решения, скрытые проблемы и неочевидные нюансы ремонта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card
                className="group overflow-hidden bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Читать статью
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <div className="text-center">
            <Button onClick={loadMore} size="lg" variant="outline" className="gap-2 bg-transparent">
              Показать еще статьи
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
