import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; 
import './Navbar.css'; 
import logoImg from '../../assets/Knowledge--logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, setCurrentLang, t } = useLanguage(); 

  const languages = {
    uz: { name: "O'zbek", flag: "🇺🇿" },
    ru: { name: "Русский", flag: "🇷🇺" },
    en: { name: "English", flag: "🇬🇧" }
  };

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logoImg} alt="Knowledge House Logo" className="logo-image" />
            </Link>
          </div>

          <div className="nav-menu-desktop">
            <NavLink to="/" className="nav-link">{t('home')}</NavLink>
            <NavLink to="/courses" className="nav-link">{t('courses')}</NavLink>
            <NavLink to="/results" className="nav-link">{t('results')}</NavLink>
            <NavLink to="/about" className="nav-link">{t('about')}</NavLink>
            <NavLink to="/contact" className="nav-link">{t('contact')}</NavLink>
            
            <div className="lang-selector-container">
              <button type="button" className="lang-current-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
                <span>{languages[currentLang].flag}</span>
                <span className="lang-text-hide">{languages[currentLang].name}</span>
                <svg className={`lang-arrow ${isLangOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="lang-dropdown">
                  {Object.keys(languages).map((lang) => (
                    <button type="button" key={lang} className={`lang-option ${currentLang === lang ? 'active' : ''}`} onClick={() => changeLanguage(lang)}>
                      <span className="lang-flag">{languages[lang].flag}</span>
                      <span>{languages[lang].name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="nav-btn text-decoration-none">{t('registerBtn')}</Link>
          </div>

         {/* Burger tugmasi */}
<button className="burger-btn" style={{ position: 'relative', zIndex: '1001' }} onClick={() => setIsOpen(!isOpen)}>
  <svg className="burger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
</button>
        </div>
      </div>

      {/* Animatsiyali mobil menyu */}
      <div className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-link">{t('home')}</NavLink>
        <NavLink to="/courses" onClick={() => setIsOpen(false)} className="nav-link">{t('courses')}</NavLink>
        <NavLink to="/results" onClick={() => setIsOpen(false)} className="nav-link">{t('results')}</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className="nav-link">{t('about')}</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="nav-link">{t('contact')}</NavLink>
        
        <div className="nav-mobile-lang-box">
          <span className="mobile-lang-title">{t('langTitle')}</span>
          <div className="mobile-lang-buttons">
            {Object.keys(languages).map((lang) => (
              <button type="button" key={lang} className={`mobile-lang-btn ${currentLang === lang ? 'active' : ''}`} onClick={() => { changeLanguage(lang); setIsOpen(false); }}>
                <span className="m-flag">{languages[lang].flag}</span>
                <span>{languages[lang].name}</span>
              </button>
            ))}
          </div>
        </div>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="nav-btn nav-btn-mobile text-decoration-none">{t('registerBtn')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;