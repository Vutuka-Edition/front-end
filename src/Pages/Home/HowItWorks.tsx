import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { processes } from '../../Constants/HowItWorksItems'
import ProcessCard from '../../Components/ProcessCard'
import vectorImg from '../../assets/images/Vector.png'

const HowItWorks: FC = () => {
  const { t } = useTranslation()
  return (
    <div id='how-it-works' className="bg-main px-4 lg:px-20 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-white">
          {t('HowItWorks-title')}
        </h1>
        <p className="text-lg mb-8 text-center lg:w-1/3 text-gray-300">
          {t('HowItWorks-description')}
        </p>
      </div>
      <div className="relative min-h-[30vh] flex items-center justify-center 2xl:p-6 overflow-hidden my-12">
        <img
          src={vectorImg}
          alt="Background"
          className="absolute w-full h-full object-contain rotate-90 md:rotate-0 top-0 left-0 right-0 z-0"
        />
        <div className="w-full h-full relative z-10 text-white text-center text-2xl font-semibold flex flex-col gap-12 md:flex-row items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processes.map(item => (
                <ProcessCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-white text-lg text-center md:text-3xl md:w-2/3">
          {t('HowItWorks-button-description')}
        </p>
        <Link
          to="register"
          className="px-16 py-3 text-lg font-semibold rounded-lg bg-white text-main hover:bg-main-hover hover:text-white transition-colors duration-300"
        >
          {t('get-started')}
        </Link>
      </div>
    </div>
  )
}

export default HowItWorks