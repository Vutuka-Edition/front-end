import { useEffect, useState } from 'react'
import type { FC } from 'react'

import NavBar from '../../Components/NavBar'
import Hero from './Hero'
import heroImg from '../../Assets/Images/heroImg.png'

const Home: FC = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative bg-[#F2F0F0]">
      <NavBar isScrolled={scroll} />
      <div id='home' className="h-[70vh] lg:h-[100vh] flex items-center justify-between">
        <Hero />
        <div className="hidden md:flex flex-1 h-full">
          <img
            src={heroImg}
            alt="hero"
            className="w-11/12 h-full object-cover object-center rounded-b-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  )
}

export default Home