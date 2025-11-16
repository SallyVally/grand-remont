"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Косметический ремонт",
    description:
      "Прораб выезжает на замер, обсуждает с Вами все нюансы, далее передает замерный лист сметчику, и Вы получаете развернутый сметный расчет в этот же день",
    price: "от 5 500 р/м²",
    image: "/painting-walls-renovation.jpg",
    accent: "blue",
  },
  {
    title: "Капитальный ремонт под ключ",
    description:
      "Производится полноценная оценка помещения на предмет выявления дефектов, на основании этого подготавливается соответствующая смета, и после производятся работы согласно заранее оговоренных моментов",
    price: "от 9 000 р/м²",
    image: "/major-apartment-renovation-before-after.jpg",
    accent: "purple",
  },
  {
    title: "Дизайнерский ремонт",
    description:
      "В услугу входят организационные моменты связанные с управляющей компанией, урегулирование вопросов с соседями, решение вопросов с дизайнером, и полное освобождение Вас от всех производственных вопросов",
    price: "от 12 000 р/м²",
    image: "/luxury-modern-interior-design.jpg",
    accent: "yellow",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToRequest = () => {
    const element = document.getElementById("request")
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-background topo-pattern">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-float-in" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="accent-dot accent-dot-blue"></span>
            <span className="accent-dot accent-dot-purple"></span>
            <span className="accent-dot accent-dot-yellow"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Выберите подходящий тип ремонта для вашей квартиры</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`cs2-card overflow-hidden rounded-lg opacity-0 animate-scale-elastic delay-${(index + 2) * 100}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`accent-dot accent-dot-${service.accent}`}></span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary tracking-wide">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-2xl font-bold text-foreground mb-4 tracking-wide">{service.price}</p>
                  <Button
                    onClick={scrollToRequest}
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300 uppercase tracking-wider text-sm font-bold"
                  >
                    Получить смету
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
