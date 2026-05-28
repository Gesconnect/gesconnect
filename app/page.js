import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import Mission         from '@/components/Mission'
import Products        from '@/components/Products'
import Services        from '@/components/Services'
import FoundingClients from '@/components/FoundingClients'
import Contact         from '@/components/Contact'
import Footer          from '@/components/Footer'
import WhatsAppButton  from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Products />
        <Services />
        <FoundingClients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
