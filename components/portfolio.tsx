"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Косметический ремонт однокомнатной квартиры 35 м.кв.",
    cost: "368 000 ₽",
    image: "/renovated-studio-apartment-gray-walls.jpg",
  },
  {
    title: "Капитальный в элитном ЖК «Авиатор» адрес: ул. Аэропорт, д.88",
    cost: "956 000 ₽",
    image: "/modern-apartment-renovation-white-walls.jpg",
  },
  {
    title: "Капитальный ремонт четырехкомнатной квартиры 163.47 м.кв.",
    cost: "1 600 000 ₽",
    image: "/luxury-apartment-interior-modern-design.jpg",
  },
  {
    title: "Дизайнерский ремонт двухкомнатной квартиры 52 м.кв.",
    cost: "420 000 ₽",
    image: "/modern-kitchen-white-cabinets.jpg",
  },
  {
    title: "Капитальный ремонт трехкомнатной квартиры 78 м.кв.",
    cost: "702 000 ₽",
    image: "/trehkomn.jpg",
  },
  {
    title: "Дизайнерский ремонт квартиры-студии 45 м.кв.",
    cost: "540 000 ₽",
    image: "/stud.jpg",
  },
]

export default function Portfolio() {
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
    <section ref={sectionRef} id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            НАШИ РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
          </h2>
          <p className={`text-muted-foreground ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
            Вместе с нашей командой в 2024 году новоселье в новых квартирах отпраздновали уже 24 семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground leading-tight">{project.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Стоимость ремонта</p>
                  <p className="text-2xl font-bold text-foreground">{project.cost}</p>
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
