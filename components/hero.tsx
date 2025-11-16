"use client"

import { Button } from "@/components/ui/button"
import { Camera, CreditCard, FileCheck, Gift } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToRequest = () => {
    const element = document.getElementById("request")
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden topo-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-living-room-with-leather-sofa-and-wooden-sh.jpg"
          alt="Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`space-y-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="accent-dot accent-dot-blue"></span>
                <span className="accent-dot accent-dot-purple"></span>
                <span className="accent-dot accent-dot-yellow"></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight sm:leading-tight lg:leading-tight text-balance">
                Качественный
                <br />
                <span className="text-primary">Ремонт под ключ</span>
              </h1>
            </div>

            <div
              className={`inline-block transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0 animate-glow" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="glass px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold text-primary tracking-wider">Гарантия 2 года!</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Camera, text: "Фото и видеоотчеты", delay: "delay-300" },
                { icon: CreditCard, text: "Поэтапная оплата за выполненную работу", delay: "delay-400" },
                { icon: FileCheck, text: "Работаем по стандартам СНиП и ГОСТ", delay: "delay-500" },
              ].map((feature, i) => (
                <div key={i} className={`cs2-card p-4 rounded-lg opacity-0 animate-float-in ${feature.delay}`}>
                  <div className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-xs font-medium text-foreground/90 leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-foreground/70 text-base">
                Пройдите короткий тест и узнайте стоимость
                <br />
                ремонта вашей квартиры в течение 1 часа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  size="lg"
                  onClick={scrollToRequest}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50 uppercase tracking-wider"
                >
                  Рассчитать стоимость
                </Button>
                <div className="glass-strong p-4 rounded-lg flex items-center space-x-3">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Получите чек-лист</p>
                    <p className="text-xs text-muted-foreground">"Как выбрать надежного подрядчика"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative */}
          <div className="hidden lg:block relative">
            <div
              className={`transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative">
                <img
                  src="/modern-interior-design-with-plants.jpg"
                  alt="Interior Design"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 rounded-lg border border-primary/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
