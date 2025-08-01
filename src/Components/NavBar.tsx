import { useState } from 'react'
import type { FC, RefObject } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useClickOutside from '../Hooks/useClickOutside.ts'
import authService from '../Services/authServices.tsx'
import { handleLogout } from '../Utils/logoutHandler.ts'
import { menuLanguages } from '../Constants/LanguangesMenu.ts'
import { navigationItems } from '../Constants/NavigationMenu.ts'
import type { RootState, LanguageMenu } from '../Types/generalTypes'
import { updatePreferences } from '../Redux/currentUserRedux.ts'
import logoImg from '../../Assets/Images/logo.png'
import logoutImg from '../../Assets/Icons/log-out.svg'
import TogglableMenu from './TogglableMenu.tsx'

interface NavBarProps {
  isScrolled: boolean
}

const NavBar: FC<NavBarProps> = ({ isScrolled }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState<string | null>(null)
  const [toggleMenuProfile, setToggleMenuProfile] = useState<boolean>(false)
  const { user, preferences } = useSelector(
    (state: RootState) => state.currentUser,
  )
  const token = authService.getToken()

  const priviledgedLanguage =
    authService.getLanguage() ?? preferences?.languages ?? 'english'
  const currentLanguage = menuLanguages.find(
    (lang: LanguageMenu) =>
      lang.title === priviledgedLanguage?.toLowerCase(),
  )

  const suggestionsRef = useClickOutside(() => {
    setToggleMenu(null)
  }) as RefObject<HTMLDivElement>

  const profileMenuRef = useClickOutside(() => {
    setToggleMenuProfile(false)
  }) as RefObject<HTMLDivElement>

  const handleToggleMenu = (menu: string) => {
    setToggleMenu(menu)
  }

  const changeChange = (newLanguage: LanguageMenu | null) => {
    if (!newLanguage) return
    dispatch(
      updatePreferences({
        ...preferences,
        languages: newLanguage.title.toUpperCase(),
      }),
    )
    authService.setLanguage(newLanguage.title.toLowerCase())
    setToggleMenu(null)
  }

  const handleScroll = (url: string) => {
    const element = document.getElementById(url)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onLogoutClick = () => {
    handleLogout()
    setToggleMenuProfile(false)
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full py-4 z-50 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-between gap-2 px-4 md:px-20">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="logo" className="w-12 h-12" />
          <h1 className="hidden sm:inline lg:hidden 2xl:inline text-3xl font-[900] text-main">
            Skyscapr
          </h1>
          <h1 className="hidden sm:inline text-3xl font-[900] text-main">
            Affiliate
          </h1>
        </div>
        <div className="relative">
          <button
            data-testid="language-button"
            className="cursor-pointer w-6 h-6 md:w-8 md:h-8 rounded-full"
            onClick={() => handleToggleMenu('language')}
          >
            <img
              src={currentLanguage?.image}
              alt={currentLanguage?.title}
              className="w-full h-full rounded-full"
            />
          </button>
          {toggleMenu !== null && (
            <div
              ref={suggestionsRef}
              className="absolute top-[50px] right-2 border border-main p-2 bg-white text-main rounded-md shadow-xl z-10"
            >
              <TogglableMenu
                data-testid="togglable-menu"
                changeChange={changeChange}
                items={menuLanguages}
                isLanguageMenu={toggleMenu === 'language'}
                isVisible={toggleMenu !== null}
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-2 items-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-item-${item.id}`}
                onClick={() => handleScroll(item.link)}
                className="text-gray-500 text-lg font-[600] hover:text-main"
              >
                {item.title}
              </button>
            ))}
          </div>
          {!token ? (
            <Link to="/auth/login">
              <button
                data-testid="login-button"
                className="bg-main hover:bg-main-hover text-yellow-extended p-2 md:px-6 md:py-2 rounded-lg font-[700] "
              >
                {t('login')}
              </button>
            </Link>
          ) : (
            <button
              data-testid="profile-button"
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center bg-main cursor-pointer"
              onClick={() => setToggleMenuProfile(true)}
            >
              <p className="text-lg md:text-xl text-yellow-extended font-bold">
                {user?.firstName?.charAt(0).toLocaleUpperCase()}
              </p>
              <p className="text-lg md:text-xl text-yellow-extended font-bold">
                {user?.lastName?.charAt(0).toLocaleUpperCase()}{' '}
              </p>
            </button>
          )}
        </div>
        {toggleMenuProfile && (
          <div
            ref={profileMenuRef}
            className="absolute top-[55px] right-4 md:right-20 border border-main p-2 md:p-4 bg-white rounded-md shadow-xl z-10"
          >
            <button
              className="w-full flex items-center gap-2 py-2 px-4 hover:bg-red-100 rounded-lg text-red-extended cursor-pointer"
              onClick={onLogoutClick}
            >
              <img src={logoutImg} alt="logoutImg" className="w-6 h-6" />
              <p className="font-bold">{t('Log Out')}</p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar