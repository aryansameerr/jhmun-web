import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
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
