// src/app/page.tsx
import Hero from './home/Hero1'
import Features from './home/Features'
import Showcase from './home/Showcase'
import Testimonials from './home/Testimonials'
// import Pricing from './home/Pricing'
import CallToAction from './home/CallToAction'
import Footer from './home/Footer'
import Header from './home/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        {/* <Pricing /> */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}