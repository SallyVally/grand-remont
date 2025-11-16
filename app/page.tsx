import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Process from "@/components/process"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import Request from "@/components/request"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Request />
      <Blog />
      <Footer />
    </main>
  )
}
