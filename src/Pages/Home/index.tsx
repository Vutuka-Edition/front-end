import type { FC } from 'react'

import Hero from './Hero'
import heroImg from '../../assets/images/Hero.png'
import herobg from '../../assets/images/Hero-bg.png'

const Home: FC = () => {


  return (
    <main className="relative bg-[#F2F0F0]">
      <div id='home' className="h-[70vh] lg:h-[100vh] flex items-center justify-between">
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

    </main>
  )
}

export default Home