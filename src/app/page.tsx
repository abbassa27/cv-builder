import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Steps from "@/components/landing/Steps"
import Footer from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Footer />
    </main>
  )
}