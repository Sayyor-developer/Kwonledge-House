// src/pages/course-detail/CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import { useLanguage } from '../../context/LanguageContext'; // 🔥 Sening global til context'ing
import { toast } from 'react-toastify'; 
import './CourseDetail.css';

// 🔥 Zamonaviy ikonkalarni import qilamiz
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  User, 
  Phone, 
  X, 
  Send,
  GraduationCap
} from 'lucide-react';

// 🌐 Sahifadagi interfeys matnlari uchun lokal lug'at
const detailTranslations = {
  uz: {
    notFound: "Kechirasiz, bunday yo'nalish topilmadi jigar!",
    backToCourses: "Kurslarga qaytish",
    backToList: "Kurslar ro'yxatiga qaytish",
    direction: "Yo'nalishi",
    aboutCourse: "Kurs Haqida To'liq Ma'lumot",
    program: "O'quv Dasturi va Imkoniyatlar",
    advantages: "Kurs afzalliklari:",
    adv1: "O'zbek va Rus tillaridagi maxsus sinflar",
    adv2: "Tajribali va professional sertifikatlangan ustozlar",
    adv3: "Har oylik real imtihon sinovlari va monitoring",
    metrics: "Kurs Metriklari",
    duration: "Davomiyligi:",
    price: "Oylik to'lov:",
    note: "* Guruhlar ochilish muddati va dars kunlarini aniqlashtirish uchun administrator bilan bog'laning.",
    registerBtn: "Kursga Ro'yxatdan O'tish",
    modalTitle: "Kursga ro'yxatdan o'tish",
    modalLabelName: "Ism va Familiyangiz",
    modalLabelPhone: "Telefon raqamingiz",
    modalSubmit: "Arizani Yuborish",
    errorName: "⚠️ Iltimos, ism va familiyangizni kiriting!",
    errorPhone: "⚠️ Iltimos, telefon raqamingizni kiriting!",
    errorPrefix: "⚠️ Telefon raqami +998 bilan boshlanishi shart!",
    errorLength: "⚠️ Telefon raqami noto'g'ri! Jami 13 ta belgidan iborat bo'lishi kerak.",
    successMsg: "🚀 Arizangiz muvaffaqiyatli qabul qilindi!"
  },
  ru: {
    notFound: "Извините, такое направление не найдено!",
    backToCourses: "Вернуться к курсам",
    backToList: "Назад к списку курсов",
    direction: "Направление",
    aboutCourse: "Полная информация о курсе",
    program: "Учебная программа и возможности",
    advantages: "Преимущества курса:",
    adv1: "Специальные классы на узбекском и русском языках",
    adv2: "Опытные и профессионально сертифицированные преподаватели",
    adv3: "Ежемесячные реальные экзаменационные тесты и мониторинг",
    metrics: "Метрики курса",
    duration: "Длительность:",
    price: "Ежемесячная оплата:",
    note: "* Для уточнения сроков открытия групп и дней занятий свяжитесь с администратором.",
    registerBtn: "Записаться на курс",
    modalTitle: "Запись на курс",
    modalLabelName: "Ваше имя и фамилия",
    modalLabelPhone: "Номер телефона",
    modalSubmit: "Отправить заявку",
    errorName: "⚠️ Пожалуйста, введите имя и фамилию!",
    errorPhone: "⚠️ Пожалуйста, введите номер телефона!",
    errorPrefix: "⚠️ Номер телефона должен начинаться с +998!",
    errorLength: "⚠️ Неверный номер телефона! Всего должно быть 13 символов.",
    successMsg: "🚀 Ваша заявка успешно принята!"
  },
  en: {
    notFound: "Sorry, no such course found!",
    backToCourses: "Back to courses",
    backToList: "Back to course list",
    direction: "Direction",
    aboutCourse: "Full Course Information",
    program: "Curriculum and Opportunities",
    advantages: "Course advantages:",
    adv1: "Special classes in Uzbek and Russian languages",
    adv2: "Experienced and professionally certified teachers",
    adv3: "Monthly real exam tests and progress monitoring",
    metrics: "Course Metrics",
    duration: "Duration:",
    price: "Monthly fee:",
    note: "* To clarify group opening dates and class schedules, please contact the administrator.",
    registerBtn: "Register for Course",
    modalTitle: "Register for the course",
    modalLabelName: "Your Full Name",
    modalLabelPhone: "Phone Number",
    modalSubmit: "Send Application",
    errorName: "⚠️ Please enter your full name!",
    errorPhone: "⚠️ Please enter your phone number!",
    errorPrefix: "⚠️ Phone number must start with +998!",
    errorLength: "⚠️ Invalid phone number! It must be exactly 13 characters long.",
    successMsg: "🚀 Your application has been successfully received!"
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentLang } = useLanguage(); // 🔥 Joriy tilni olamiz ('uz', 'ru' yoki 'en')

  // Tanlangan til bo'yicha interfeys matnlari
  const p = detailTranslations[currentLang] || detailTranslations['uz'];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-not-found-container">
        <h2>{p.notFound}</h2>
        <button className="not-found-btn" onClick={() => navigate('/courses')}>
          <ArrowLeft size={18} /> {p.backToCourses}
        </button>
      </div>
    );
  }

  // Obyekt ko'rinishidagi til ma'lumotlarini xavfsiz ajratib olish
  const courseTitle = course.title[currentLang] || course.title['uz'];
  const courseDesc = course.description[currentLang] || course.description['uz'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error(p.errorName);
      return;
    }

    if (phone === '+998' || !phone) {
      toast.error(p.errorPhone);
      return;
    }

    if (!phone.startsWith('+998')) {
      toast.error(p.errorPrefix);
      return;
    }

    if (phone.length !== 13) {
      toast.error(p.errorLength);
      return;
    }

    const userData = {
      name: fullName.trim(),
      phone: phone,
      course: courseTitle // 🔥 Obyekt emas, tayyor tarjima qilingan string matn ketadi
    };

    console.log("Xavfsiz va tasdiqlangan ma'lumotlar:", userData);
    toast.success(p.successMsg);

    setFullName('');
    setPhone('+998');
    setIsModalOpen(false);
  };

  return (
    <div className="course-detail-page">
      <div className="detail-container">
        {/* ⬅️ Orqaga qaytish tugmasi */}
        <button className="back-btn" onClick={() => navigate('/courses')}>
          <ArrowLeft size={18} className="back-arrow" /> {p.backToList}
        </button>

        <div className="detail-header-card">
          <div className="header-glass-overlay"></div>
          <div className="header-main-info">
            <div className="detail-icon">
              {course.icon ? course.icon : <GraduationCap size={40} color="#6366f1" />}
            </div>
            {/* 🔥 Tuzatildi: [currentLang] orqali string render qilinadi */}
            <h1 className="detail-title">{courseTitle}</h1>
            <span className={`course-card-badge tag-${course.category.toLowerCase()}`}>
              {course.category} {p.direction}
            </span>
          </div>
        </div>

        <div className="detail-content-grid">
          <div className="detail-main-text">
            <h2>{p.aboutCourse}</h2>
            {/* 🔥 Tuzatildi: Obyekt emas, matn chiqariladi */}
            <p className="main-desc-p">{courseDesc}</p>
            
            <hr className="detail-divider" />
            
            <h3>{p.program}</h3>
            {/* Hozircha fullInfo oddiy string ligi uchun o'zgarishsiz qoldi */}
            <p className="full-info-text">{course.fullInfo}</p>
            
            <div className="advantage-box">
              <h4>
                <CheckCircle2 size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> 
                {p.advantages}
              </h4>
              <ul>
                <li>{p.adv1}</li>
                <li>{p.adv2}</li>
                <li>{p.adv3}</li>
              </ul>
            </div>
          </div>

          <div className="detail-sidebar-info">
            <h3>{p.metrics}</h3>
            <div className="sidebar-metrics-list">
              <div className="sidebar-item">
                <span className="sidebar-label">
                  <Clock size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> {p.duration}
                </span> 
                <strong className="sidebar-value">{course.duration}</strong>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-label">
                  <CreditCard size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> {p.price}
                </span> 
                <strong className="price-accent">{course.price}</strong>
              </div>
            </div>
            <hr className="sidebar-divider" />
            <p className="sidebar-note">{p.note}</p>
            
            <button className="register-btn" onClick={() => setIsModalOpen(true)}>
              {p.registerBtn}
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 INTEGRATSIYA QILINGAN PREMIUM MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
              <X size={18} />
            </button>
            
            <div className="modal-header-section">
              <h3>{p.modalTitle}</h3>
              {/* 🔥 Tuzatildi: Obyekt emas, string matn chiqariladi */}
              <p className="modal-course-name">Yo'nalish: <span>{courseTitle}</span></p>
            </div>
            
            <form onSubmit={handleSubmit} noValidate className="modal-form">
              {/* Ism Familiya Inputi */}
              <div className="input-group">
                <label>{p.modalLabelName}</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <User size={18} />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Ismoilov Sayyor" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              {/* Telefon Raqam Inputi */}
              <div className="input-group">
                <label>{p.modalLabelPhone}</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <Phone size={18} />
                  </span>
                  <input 
                    type="tel" 
                    placeholder="+998991234567" 
                    value={phone}
                    maxLength={13} 
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.length < 4) {
                        setPhone('+998');
                        return;
                      }
                      const filteredVal = val[0] === '+' 
                        ? '+' + val.slice(1).replace(/\D/g, '') 
                        : val.replace(/\D/g, '');
                        
                      setPhone(filteredVal);
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="modal-submit-btn">
                <Send size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                {p.modalSubmit}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;