import { useState } from 'react';
import type { FC, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Phone, Mail, X } from 'lucide-react';

import useClickOutside from '../Hooks/useClickOutside.ts';
import authService from '../Services/authServices.ts';
import socialMediaLinks from '../Constants/socialMediaLinks.ts';
import { handleLogout } from '../Utils/logoutHandler.ts';
import { menuLanguages } from '../Constants/LanguangesMenu.ts';
import { navigationItems } from '../Constants/NavigationMenu.ts';
import type { RootState, LanguageMenu } from '../Types/generalTypes';
import { updatePreferences } from '../Redux/currentUserRedux.ts';
import logoSmall from '../assets/images/logo-small.png';
import logoLong from '../assets/images/logo-long.png';
import logoutImg from '../assets/icons/log-out.svg';
import TogglableMenu from './TogglableMenu.tsx';

interface NavBarProps {
  isScrolled: boolean;
}

const NavBar: FC<NavBarProps> = ({ isScrolled }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<string | null>(null);
  const [toggleMenuProfile, setToggleMenuProfile] = useState<boolean>(false);
  const { user, preferences } = useSelector((state: RootState) => state.currentUser);
  const token = authService.getToken();

  const priviledgedLanguage = authService.getLanguage() ?? preferences?.languages ?? 'english';
  const currentLanguage = menuLanguages.find(
    (lang: LanguageMenu) => lang.title === priviledgedLanguage?.toLowerCase()
  );

  const suggestionsRef = useClickOutside(() => {
    setToggleMenu(null);
  }) as RefObject<HTMLDivElement>;

  const profileMenuRef = useClickOutside(() => {
    setToggleMenuProfile(false);
  }) as RefObject<HTMLDivElement>;

  const handleToggleMenu = (menu: string) => {
    setToggleMenu(menu);
  };

  const changeChange = (newLanguage: LanguageMenu | null) => {
    if (!newLanguage) return;
    dispatch(
      updatePreferences({
        ...preferences,
        languages: newLanguage.title.toUpperCase(),
      })
    );
    authService.setLanguage(newLanguage.title.toLowerCase());
    setToggleMenu(null);
  };

  const handleScroll = (url: string) => {
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onLogoutClick = () => {
    handleLogout();
    setToggleMenuProfile(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full py-2 z-50 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-between gap-2 px-4 md:px-20">
        <div className="flex items-center gap-12">
          <img src={logoSmall} alt="logo" className="h-12 md:hidden" />
          <img src={logoLong} alt="logo" className="h-16 hidden md:inline" />
          <div className="hidden lg:flex gap-4 items-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-item-${item.id}`}
                onClick={() => handleScroll(item.link)}
                className="text-lg font-[600] text-gray-600 hover:text-main"
              >
                {t(item.title)}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 lg:gap-4">
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
          {!token ? (
            <Link to="/login">
              <button
                data-testid="login-button"
                className="hidden lg:inline bg-green-new hover:bg-white hover:text-main text-white p-2 md:px-6 md:py-2 rounded-lg font-[700] "
              >
                {t('login')}
              </button>
            </Link>
          ) : (
            <button
              data-testid="profile-button"
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center bg-green-new text-white cursor-pointer"
              onClick={() => setToggleMenuProfile(true)}
            >
              <p className="text-lg md:text-xl text-white font-bold">
                {user?.firstName?.charAt(0).toLocaleUpperCase()}
              </p>
              <p className="text-lg md:text-xl text-white font-bold">
                {user?.lastName?.charAt(0).toLocaleUpperCase()}{' '}
              </p>
            </button>
          )}
          <button
            className="lg:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen && <Menu className="w-8 md:w-12 h-8 md:h-12 text-main" />}
          </button>
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

              {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-main-hover z-40">
          <div className="flex flex-col h-full max-h-full overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white bg-main-hover">
              <img src={logoSmall} alt="Youthcare Logo" className="h-12" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 cursor-pointer"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 py-12 mobile-menu-nav">
              <div className="space-y-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="block text-3xl sm:text-5xl font-bold text-white hover:text-green-200 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.title)}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-primary-700 space-y-6 mobile-menu-bottom">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-white" />
                  <a
                    href="tel:+243833914023"
                    className="text-lg text-white font-medium"
                  >
                    +243 9876378836
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-white" />
                  <a
                    href="mailto:info@youthcarerdc.org"
                    className="text-lg text-white font-medium"
                  >
                    info@vutukaedition.com
                  </a>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-4">
                <button className="w-full border-2 border-white text-white py-4 px-6 rounded-full text-xl font-bold hover:bg-white hover:text-main transition-colors mobile-cta-button">
                  {t('login')}
                </button>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <span className="text-sm sm:text-lg font-medium">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default NavBar;
