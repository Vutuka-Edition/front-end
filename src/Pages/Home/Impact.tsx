import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { impactStats } from '../../Constants/impactStats'
import { motion, AnimatePresence } from 'framer-motion'

const ImpactSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div id='news' className={`transition-colors duration-700 ease-in-out px-2 sm:px-4 lg:px-8 xl:px-16 bg-white-extended`}>
      <div className="relative h-[200vh] sm:h-[250vh] md:h-[300vh] max-w-7xl mx-auto text-neutral-900">
        {/* Sticky Content */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center z-10 px-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl heading-1 mb-4 leading-tight">Ensemble, nous faisons la différence</h1>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] text-main-hover heading-display leading-none">
                  {impactStats[activeIndex].curentValue}
                  <CountUp
                    end={impactStats[activeIndex].value}
                    duration={2}
                    separator=","
                  />
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-main">{impactStats[activeIndex].title}</p>
                <p className="text-neutral-500 text-xs sm:text-sm max-w-md sm:max-w-lg mx-auto">{impactStats[activeIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Triggers */}
        <div className="absolute top-0 w-full">
          {impactStats.map((_, index: number) => (
            <ScrollTrigger key={index} index={index} setActiveIndex={setActiveIndex} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ScrollTrigger: React.FC<{
  index: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}> = ({ index, setActiveIndex }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setActiveIndex(index)
    }
  }, [inView, index, setActiveIndex])

  return <div ref={ref} className="h-screen" />
}

export default ImpactSection
