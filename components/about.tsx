"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-24 bg-secondary/20 topo-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Team */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="accent-dot accent-dot-blue"></span>
                <span className="accent-dot accent-dot-green"></span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Наша команда</h2>
            </div>

            <div className="flex items-center justify-around">
              {[
                { img: "/professional-contractor-founder.jpg", label: "Основатель", name: "Алексей" },
                { img: "/office-team-meeting.png", label: "Офис", name: "компании" },
                { img: "/construction-workers-team.png", label: "Бригада", name: "специалистов" },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-28 h-28 rounded-lg overflow-hidden mx-auto mb-3 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                    <img
                      src={member.img || "/placeholder.svg"}
                      alt={member.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{member.label}</p>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { number: "+10", text: "работаем более\n10 лет" },
                { number: "+150", text: "проектов\nвыполнено" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-lg flex items-center space-x-6 hover:glass-strong transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-primary tracking-wider">{stat.number}</div>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="accent-dot accent-dot-purple"></span>
                <span className="accent-dot accent-dot-yellow"></span>
              </div>
              <h2 className="text-3xl font-bold text-foreground text-balance leading-tight">
                Мы выполняем только ремонт под ключ, а это значит
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "Все хлопоты по ремонту берем на себя, от разработки проекта до комплектации объекта всем необходимым",
                "Работы выполняют узкоспециализированные специалисты, а значит электрику делают электрики, сантехнику - сантехники и т.д.",
                "Персональный менеджер на все время работы",
                "Все работы координирует и контролирует прораб с опытом более 10 лет",
              ].map((benefit, i) => (
                <div key={i} className="cs2-card p-4 rounded-lg flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90 text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="glass-strong p-8 rounded-lg space-y-6">
              <h3 className="text-xl font-bold text-foreground leading-tight">
                А если коротко, то мы делаем ремонт пока вы занимаетесь своими любимыми делами!
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center space-x-4 flex-1">
                  <img
                    src="/mobile-phone-with-renovation-app.jpg"
                    alt="Mobile App"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Закажите</p>
                    <p className="font-bold text-foreground uppercase tracking-wider">расчет</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  onClick={scrollToRequest}
                  className="bg-primary hover:bg-primary/90 uppercase tracking-wider text-sm font-bold"
                >
                  Рассчитать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
