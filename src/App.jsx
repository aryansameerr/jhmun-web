import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import CommitteeDetail from './pages/CommitteeDetail';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                       element={<Home />} />
        <Route path="/about"                  element={<About />} />
        <Route path="/committees"             element={<Committees />} />
        <Route path="/committees/:slug"       element={<CommitteeDetail />} />
        <Route path="/schedule"              element={<Schedule />} />
        <Route path="/resources"              element={<Resources />} />
        <Route path="/faqs"                   element={<FAQs />} />
        <Route path="*"                       element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
