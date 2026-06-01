// src/pages/home/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext'; // 🔥 Context ulandi
import './Home.css';
import { toast } from 'react-toastify';

import homePageImg from '../../assets/home-page.png';

import Courses from '../courses/Courses';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home = () => {
  const { t } = useLanguage(); // 🔥 Tarjima funksiyasi

  const [students, setStudents] = useState(0);
  const [mentors, setMentors] = useState(0);
  const [rate, setRate] = useState(0);

  const sectionRef = useRef(null);
  const [isAnimate, setIsAnimate] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsAnimate(true); },
      { threshold: 0.2 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  useEffect(() => {
    if (!isAnimate) return;
    let studentsStart = 0; const studentsEnd = 1200;
    const studentsTimer = setInterval(() => {
      studentsStart += 8;
      if (studentsStart >= studentsEnd) { setStudents(studentsEnd); clearInterval(studentsTimer); }
      else { setStudents(studentsStart); }
    }, 10);

    let mentorsStart = 0; const mentorsEnd = 15;
    const mentorsTimer = setInterval(() => {
      mentorsStart += 1;
      if (mentorsStart >= mentorsEnd) { setMentors(mentorsEnd); clearInterval(mentorsTimer); }
      else { setMentors(mentorsStart); }
    }, 120);

    let rateStart = 0; const rateEnd = 93;
    const rateTimer = setInterval(() => {
      rateStart += 1;
      if (rateStart >= rateEnd) { setRate(rateEnd); clearInterval(rateTimer); }
      else { setRate(rateStart); }
    }, 25);

    return () => { clearInterval(studentsTimer); clearInterval(mentorsTimer); clearInterval(rateTimer); };
  }, [isAnimate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const nameWords = trimmedName.split(/\s+/);

    if (nameWords.length < 2 || nameWords[0].length < 2 || nameWords[1].length < 2) {
      toast.error(t('toastNameError')); // 🔥 Dinamik Toast
      return;
    }

    const trimmedPhone = phone.trim().replace(/\s+/g, '');
    const phoneRegex = /^\+998\d{9}$/;

    if (!trimmedPhone.startsWith('+998')) {
      toast.error(t('toastPhoneStartError'));
      return;
    }

    if (trimmedPhone.length !== 13) {
      toast.error(`${t('toastPhoneLengthError')} Hozir: ${trimmedPhone.length}`);
      return;
    }

    if (!phoneRegex.test(trimmedPhone)) {
      toast.error(t('toastPhoneRegexError'));
      return;
    }

    console.log("Yangi ariza:", { name: trimmedName, phone: trimmedPhone });
    toast.success(t('toastSuccess')); // 🔥 Dinamik Toast

    setName('');
    setPhone('');
    setIsModalOpen(false);
  };

  return (
    <div className="home-page-container">
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">{t('heroBadge')}</div>
            <h1 className="hero-title">
              {t('heroTitle1')} <br />
              <span className="hero-title-accent">{t('heroTitle2')}</span>
            </h1>
            <p className="hero-description">{t('heroDesc')}</p>

            <button className="hero-cta-btn" onClick={() => setIsModalOpen(true)}>
              {t('heroCta')} <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="hero-visual">
            <div className="visual-image-wrapper">
              <div className="visual-circle-glow"></div>
              <img src={homePageImg} alt="Knowledge House Platform" className="hero-main-img" />
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats-section" ref={sectionRef}>
        <div className="stats-grid">
          <div className={`stat-card anim-delay-1 ${isAnimate ? 'start-anim' : ''}`}>
            <span className="stat-number">{students}+</span>
            <span className="stat-label">{t('statGrads')}</span>
          </div>
          <div className={`stat-card anim-delay-2 ${isAnimate ? 'start-anim' : ''}`}>
            <span className="stat-number">{mentors}+</span>
            <span className="stat-label">{t('statMentors')}</span>
          </div>
          <div className={`stat-card anim-delay-3 ${isAnimate ? 'start-anim' : ''}`}>
            <span className="stat-number">{rate}%</span>
            <span className="stat-label">{t('statRate')}</span>
          </div>
        </div>
      </div>

      {/* MODAL OYNA */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>×</button>

            <h2 className="modal-title">{t('modalTitle')}</h2>
            <p className="modal-subtitle">{t('modalSubtitle')}</p>

            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              <div className="input-group">
                <label>{t('modalLabelName')}</label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>{t('modalLabelPhone')}</label>
                <input
                  type="text"
                  placeholder="+998991234567"
                  value={phone}
                  maxLength={13}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || val === '+') { setPhone(val); return; }
                    const filteredVal = val[0] === '+' ? '+' + val.slice(1).replace(/\D/g, '') : val.replace(/\D/g, '');
                    setPhone(filteredVal);
                  }}
                />
              </div>

              <button type="submit" className="modal-submit-btn">{t('modalSubmit')}</button>
            </form>
          </div>
        </div>
      )}

      <Courses />
      <About />
      <Contact />
    </div>
  );
};

export default Home;