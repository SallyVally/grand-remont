"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageCircle, Send } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "О компании", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Услуги", href: "#services" },
    { label: "Блог", href: "#blog" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="text-2xl font-bold">ГРАНД РЕМОНТ</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-primary" />
              <div className="text-right">
                <a
                  href="tel:89529078366"
                  className="text-foreground font-semibold text-lg hover:text-primary transition-colors"
                >
                  8 (952) 907-83-66
                </a>
                <p className="text-xs text-muted-foreground">Ежедневно с 8 до 20, сб и вс выходной</p>
              </div>
              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-border">
                <a
                  href="https://wa.me/79529078366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors group"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://t.me/alexmahotin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors group"
                  title="Telegram"
                >
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:89529078366" className="text-primary font-semibold">
                8 (952) 907-83-66
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/79529078366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/alexmahotin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Telegram
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
