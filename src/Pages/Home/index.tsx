import type { FC } from 'react'

import Hero from './Hero'
import Partners from './Partners'
import About from './About'
import FeaturedBooks from './FeaturedBooks'
import Testimonials from './Testimonials'
import HowItWorks from './HowItWorks'
import Impact from './Impact'
import BestSeller from './BestSeller'
import FAQ from './FAQ'

import heroImg from '../../assets/images/Hero.png'
import herobg from '../../assets/images/Hero-bg.png'

const Home: FC = () => {
  return (
    <main className="relative bg-white-extended">
      <div id='home' className="h-[70vh] lg:h-[85vh] flex items-center justify-between">
        <Hero />
        <div className="hidden lg:block flex-1 relative h-full">
          <img src={herobg} alt="hero-bg" className="h-full object-cover" />
          <div className="h-[60%] w-[70%] absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto border-4 border-white rounded-lg overflow-hidden">
            <img
              src={heroImg}
              alt="hero-img"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
      <Partners />
      <About />
      <FeaturedBooks />
      <Testimonials />
      <HowItWorks />
      <BestSeller />
      <Impact />
      <section className="px-4 md:px-14 lg:px-20 pb-24">
        <div className="px-4 md:px-14 lg:px-20 py-16 md:mx-[9rem] flex flex-col space-y-10 md:space-y-14 bg-[#F2F0F0] rounded-xl">
          <h1 className="text-2xl md:text-3xl text-black font-bold text-center">
              Frequently Asked Questions
          </h1>
          <FAQ />
        </div>
      </section>
    </main>
  )
}

export default Home