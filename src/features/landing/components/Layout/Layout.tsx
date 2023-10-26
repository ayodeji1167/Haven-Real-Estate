import Header from './Header';
import Faq from './Faq';
import GetStarted from './GetStarted';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
