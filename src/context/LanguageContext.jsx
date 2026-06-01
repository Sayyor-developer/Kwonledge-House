// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('uz');

  // 📝 Barcha sahifalar uchun tarjimalar bazasi
  const translations = {
    uz: {
      // Navbar
      home: "Bosh sahifa",
      courses: "Kurslar",
      results: "Natijalar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      registerBtn: "Kursga yozilish",
      langTitle: "Tilni tanlang:",
      // Home Hero
      heroBadge: "Samarqanddagi Zamonaviy Ta'lim",
      heroTitle1: "Kelajak Kasblarini",
      heroTitle2: "Knowledge House da O'rganing",
      heroDesc: "Sifatli til kurslari va eng zamonaviy IT yo'nalishlari. Katta Frontendchilar va tajribali mutaxassislar yordamida o'z sohangizning professionali bo'ling.",
      heroCta: "Bepul darsga yozilish",
      // Home Stats
      statGrads: "Muvaffaqiyatli Bitiruvchilar",
      statMentors: "Tajribali Mentorlar",
      statRate: "Ishga Joylashish Ko'rsatkichi",
      // Home Modal
      modalTitle: "Bepul darsga a'zo bo'ling",
      modalSubtitle: "Ma'lumotlaringizni qoldiring, administratorlarimiz siz bilan bog'lanishadi.",
      modalLabelName: "Ism va Familiyangiz",
      modalLabelPhone: "Telefon raqamingiz",
      modalSubmit: "Arizani jo'natish",
      // Toasts va Validatsiya
      toastNameError: "Iltimos, ism va familiyangizni to'liq kiriting! (Masalan: Ismoilov Sayyor)",
      toastPhoneStartError: "Telefon raqami +998 bilan boshlanishi shart!",
      toastPhoneLengthError: "Telefon raqami 13 ta belgidan iborat bo'lishi kerak!",
      toastPhoneRegexError: "Telefon raqami faqat raqamlardan iborat bo'lishi kerak!",
      toastSuccess: "Rahmat! Arizangiz muvaffaqiyatli qabul qilindi."
    },
    ru: {
      // Navbar
      home: "Главная",
      courses: "Курсы",
      results: "Результаты",
      about: "О нас",
      contact: "Контакты",
      registerBtn: "Записаться на курс",
      langTitle: "Выберите язык:",
      // Home Hero
      heroBadge: "Современное Образование в Самарканде",
      heroTitle1: "Изучайте Профессии",
      heroTitle2: "Будущего в Knowledge House",
      heroDesc: "Качественные языковые курсы и самые современные направления IT. Станьте профессионалом своего дела с помощью ведущих Frontend-разработчиков и опытных специалистов.",
      heroCta: "Записаться на бесплатный урок",
      // Home Stats
      statGrads: "Успешных Выпускников",
      statMentors: "Опытных Менторов",
      statRate: "Показатель Трудоустройства",
      // Home Modal
      modalTitle: "Запишитесь на бесплатный урок",
      modalSubtitle: "Оставьте свои данные, наши администраторы свяжутся с вами.",
      modalLabelName: "Имя и Фамилия",
      modalLabelPhone: "Номер телефона",
      modalSubmit: "Отправить заявку",
      // Toasts и Валидация
      toastNameError: "Пожалуйста, введите имя и фамилию полностью! (Например: Исмоилов Сайёр)",
      toastPhoneStartError: "Номер телефона должен начинаться с +998!",
      toastPhoneLengthError: "Номер телефона должен состоять из 13 символов!",
      toastPhoneRegexError: "Номер телефона должен состоять только из цифр!",
      toastSuccess: "Спасибо! Ваша заявка успешно принята."
    },
    en: {
      // Navbar
      home: "Home",
      courses: "Courses",
      results: "Results",
      about: "About Us",
      contact: "Contact",
      registerBtn: "Enroll in Course",
      langTitle: "Select Language:",
      // Home Hero
      heroBadge: "Modern Education in Samarkand",
      heroTitle1: "Learn the Professions",
      heroTitle2: "of the Future at Knowledge House",
      heroDesc: "High-quality language courses and the most modern IT directions. Become a professional in your field with the help of Senior Frontend developers and experienced experts.",
      heroCta: "Register for Free Lesson",
      // Home Stats
      statGrads: "Successful Graduates",
      statMentors: "Experienced Mentors",
      statRate: "Employment Rate",
      // Home Modal
      modalTitle: "Join a free lesson",
      modalSubtitle: "Leave your information, and our administrators will contact you.",
      modalLabelName: "First and Last Name",
      modalLabelPhone: "Phone Number",
      modalSubmit: "Submit Application",
      // Toasts and Validation
      toastNameError: "Please enter your full first and last name! (e.g., Ismoilov Sayyor)",
      toastPhoneStartError: "Phone number must start with +998!",
      toastPhoneLengthError: "Phone number must be 13 characters long!",
      toastPhoneRegexError: "Phone number must consist of digits only!",
      toastSuccess: "Thank you! Your application has been successfully received."
    }
  };

  const t = (key) => {
    return translations[currentLang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);