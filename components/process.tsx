"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "ОСТАВЬТЕ ЗАЯВКУ",
    description:
      "Оставляете заявку на сайте, на расчет стоимости ремонта, получаете смету, связываетесь и встречаетесь с прорабом",
    image: "/laptop-with-renovation-website.jpg",
  },
  {
    number: "02",
    title: "РАСЧЕТ СТОИМОСТИ",
    description: "В этот же день мы производим расчет и высылаем Вам договор на подпись",
    image: "/construction-cost-estimate-documents.jpg",
  },
  {
    number: "03",
    title: "РЕМОНТНЫЕ РАБОТЫ",
    description: "На следующий день мы завозим материалы и начинаем работы",
    image: "/construction-workers-with-hard-hats.jpg",
  },
  {
    number: "04",
    title: "ПРИЕМКА РАБОТ",
    description: "Вы принимаете, утверждаете и оплачиваете каждый этап работ",
    image: "/architects-reviewing-construction-plans.jpg",
  },
]

export default function Process() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-16 text-foreground ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          РАССКАЖЕМ ПОДРОБНЕЕ ОБ ЭТАПАХ РАБОТ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative bg-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64">
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 text-8xl font-bold text-primary/20">{step.number}</div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                <div className="h-1 w-16 bg-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
