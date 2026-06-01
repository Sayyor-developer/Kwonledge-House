import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 📁 Papka nomlarining katta-kichikligiga aniq moslangan importlar
import Navbar from './layouts/navbar/Navbar';
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import CourseDetail from './pages/coursedetail/CourseDetail'; // Papka nomini tekshirib qo'y!
import TeacherDetail from './pages/teachers/TeacherDetail';
import Results from './pages/results/Results';
import TelegramWidget from './components/TelegramWidget/TelegramWidget'; // Katta T bilan!
import './App.css';

// 🌐 Global til boshqaruvi (Context) importi 
// (Agar default export bo'lsa, qavssiz yozilishi shart!)
import { LanguageProvider } from './context/LanguageContext';

// 🎯 Agar yuqoridagi xato bersa, shundoq qavssiz variantini sinab ko'r:
// import LanguageProvider from './context/LanguageContext';

// 🔥 React Toastify import qilindi
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🔥 Zamonaviy premium ikonka
import { GraduationCap } from 'lucide-react'; 

// ==========================================================================
// 🌟 SAHIFALAR ARO YURGANDA CHIQUVCHI ODDIY LIKLANISH PANEL (NavigationWatcher)
// ==========================================================================
const NavigationWatcher = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <PageLoader />}
      <div key={location.pathname} className="page-transition-wrapper">
        {children}
      </div>
    </>
  );
};

// Kichik sahifa yuklagichi component
const PageLoader = () => {
  return (
    <div className="page-loader-container s">
      <div className="premium-spinner"></div>
      <p className="loader-text">Knowledge House</p>
    </div>
  );
};

// ==========================================================================
// 👑 SAYTGA BIRINCHI KIRGANDA CHIQUVCHI CYBER-PREMIUM WELCOME LOADER
// ==========================================================================
const WelcomeLoader = () => {
  return (
    <div className="welcome-overlay">
      {/* Orqa fondagi harakatlanuvchi futuristik nurlar (Ambient Gradients) */}
      <div className="welcome-blob blob-1"></div>
      <div className="welcome-blob blob-2"></div>
      <div className="welcome-blob blob-3"></div>

      <div className="welcome-content">
        {/* Zamonaviy Texnologik Ikonka Qutisi */}
        <div className="welcome-logo-box">
          <div className="logo-inner-glow"></div>
          <GraduationCap size={48} className="welcome-premium-icon" />
        </div>

        {/* Shimmer (Yaltirash) effektli sarlavha */}
        <h1 className="welcome-title">
          <span className="shimmer-text">Knowledge House</span>
        </h1>

        <p className="welcome-subtitle">Kelajak ta'limi shu yerdan boshlanadi</p>

        {/* Neon yuklanish liniyasi */}
        <div className="welcome-progress-bar">
          <div className="welcome-progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

// ==========================================================================
// 🌐 ASOSIY APP FUNKSIYASI
// ==========================================================================
function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Brauzer sessiyasini tekshiramiz (Har kirib chiqqanda ishlashi uchun)
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcomeAnimation');

    if (!hasSeenWelcome) {
      setShowWelcome(true);
      // Animatsiya va progress bar to'lishi uchun 3.5 soniya yetarli
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem('hasSeenWelcomeAnimation', 'true');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Agar saytga yangi kirgan bo'lsa, birinchi bo'lib faqat daxshatli Welcome ko'rsatiladi
  if (showWelcome) {
    return <WelcomeLoader />;
  }

  return (
    <LanguageProvider>
      <Router>
        {/* Yuqori navigatsiya paneli (Hamma sahifada doimiy) */}
        <Navbar />

        {/* Global xabarnomalar (Toast) oynasi */}
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {/* Sahifalar yuklanishi va routerlarni kuzatuvchi watcher */}
        <NavigationWatcher>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
          </Routes>
        </NavigationWatcher>

        {/* 🚀 Ekran chetidagi suzuvchi premium Telegram chat widgeti */}
        <TelegramWidget />
      </Router>
    </LanguageProvider>
  );
}

export default App;