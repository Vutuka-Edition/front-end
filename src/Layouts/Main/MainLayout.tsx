import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const MainLayout: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={scroll} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
