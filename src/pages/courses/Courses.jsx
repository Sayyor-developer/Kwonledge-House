// src/pages/courses/Courses.jsx
import React, { useState } from 'react';
import CourseCard from '../../components/coursecard/CourseCard';
import { coursesData } from '../../data/coursesData';
import { useLanguage } from '../../context/LanguageContext'; // 🔥 Sening maxsus context'ing
import './Courses.css';

// 🌐 Sahifadagi sarlavhalar va tablar tarjimasi uchun lokal lug'at
const pageTranslations = {
  uz: {
    badge: "Knowledge House Ta'lim Yo'nalishlari",
    title: "Bizning Kurslar va To'garaklar",
    subtitle: "O'zbek va rus sinflari uchun guruhlar mavjud. Sifatli ta'lim va eng hamyonbop narxlar.",
    all: "Hamma kurslar",
    it: "IT Yo'nalishlari",
    lang: "Xorijiy Tillar",
    science: "Fanlar & Abituriyent",
    special: "Maxsus & Bolalar uchun"
  },
  ru: {
    badge: "Образовательные направления Knowledge House",
    title: "Наши курсы и кружки",
    subtitle: "Доступны группы для узбекских и русских классов. Качественное образование и самые доступные цены.",
    all: "Все курсы",
    it: "IT Направления",
    lang: "Иностранные языки",
    science: "Предметы и Абитуриент",
    special: "Специальные и для детей"
  },
  en: {
    badge: "Knowledge House Education Directions",
    title: "Our Courses & Clubs",
    subtitle: "Groups are available for Uzbek and Russian classes. Quality education and the most affordable prices.",
    all: "All Courses",
    it: "IT Directions",
    lang: "Foreign Languages",
    science: "Sciences & Entrants",
    special: "Special & For Kids"
  }
};

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { currentLang } = useLanguage(); // 🔥 Sening global til o'zgaruvching ('uz', 'ru', 'en')

  // Joriy tildagi sahifa matnlarini aniqlaymiz (agar yo'q bo'lsa default 'uz')
  const p = pageTranslations[currentLang] || pageTranslations['uz'];

  const filteredCourses = activeCategory === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <div className="courses-page">
      <div className="courses-container">
        
        <div className="courses-header">
          <div className="courses-badge">{p.badge}</div>
          <h1 className="courses-page-title">{p.title}</h1>
          <p className="courses-page-subtitle">{p.subtitle}</p>
        </div>

        <div className="filter-tabs-container">
          <button className={`filter-tab ${activeCategory === 'All' ? 'tab-active' : ''}`} onClick={() => setActiveCategory('All')}>{p.all}</button>
          <button className={`filter-tab ${activeCategory === 'IT' ? 'tab-active' : ''}`} onClick={() => setActiveCategory('IT')}>{p.it}</button>
          <button className={`filter-tab ${activeCategory === 'Language' ? 'tab-active' : ''}`} onClick={() => setActiveCategory('Language')}>{p.lang}</button>
          <button className={`filter-tab ${activeCategory === 'Science' ? 'tab-active' : ''}`} onClick={() => setActiveCategory('Science')}>{p.science}</button>
          <button className={`filter-tab ${activeCategory === 'Special' ? 'tab-active' : ''}`} onClick={() => setActiveCategory('Special')}>{p.special}</button>
        </div>

        <div className="courses-grid" key={activeCategory}>
          {filteredCourses.map((course, index) => (
            <CourseCard 
              key={course.id}
              id={course.id}
              /* ⚡ Obyekt emas, tayyor string (matn) holatida tilga qarab uzatamiz, React urishmaydi */
              title={course.title[currentLang] || course.title['uz']}
              description={course.description[currentLang] || course.description['uz']}
              duration={course.duration}
              price={course.price}
              category={course.category}
              icon={course.icon}
              style={{ "--card-i": index }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;