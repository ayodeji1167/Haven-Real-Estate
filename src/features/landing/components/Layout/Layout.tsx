import Header from './Header';
import Faq from './Faq';
import GetStarted from './GetStarted';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function Layout() {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', []);
  return (
    <div>
      {!isHomePage && <Header />}
      <Outlet />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
