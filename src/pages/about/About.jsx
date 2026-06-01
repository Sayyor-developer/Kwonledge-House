// src/pages/about/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🔥 Ustoz profiliga o'tish uchun
import './About.css';
import sarvinoz from '../../assets/sarvinoz.jpg'
import faina from '../../assets/faina.jpg'
// import madina from '../../assets/madina.jpg'
import vasila from '../../assets/vasila.jpg'
// import muhayyo from '../../assets/muhayyo.jpg'
// import ozoda from '../../assets/ozoda.jpg'
// import charos from '../../assets/charos.jpg'
import zaynura from '../../assets/zaynura.jpg'
import gulzoda from '../../assets/gulzoda.jpg'
import karen from '../../assets/karen.jpg'
import ibrohim from '../../assets/ibrohim.jpg'
// import feruza from '../../assets/feruza.jpg'
// import sayyor from '../../assets/sayyor.jpg'
import fazilat from '../../assets/fazilat.jpg'
import nasiba from '../../assets/nasiba.jpg'


const About = () => {
  const navigate = useNavigate();

  // 🔥 Ustozlar ro'yxati ma'lumotlari (Buni keyinchalik alohida data faylga olsang ham bo'ladi)
  const teachersData = [
    {
      id: 1,
      name: "Sarvinoz Baxtiyarovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: sarvinoz, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 2,
      name: "Faina Ramilevna",
      role: "IELTS / CEFR Coordinator",
      experience: "4 yil tajriba",
      image: faina,
      specialty: "General English, IELTS Mode AI"
    },
    {
      id: 3,
      name: "Madina Shavkatovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      /* image: madina, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "Node.js, PostgreSQL, Supabase"
    },
     
     {
      id: 4,
      name: "Vasila Uktamovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: vasila, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 5,
      name: "Muhayyo Shuxratovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
     /*  image: muhayyo, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 6,
      name: "Ozoda Tojieva",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      /* image: ozoda, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 7,
      name: "Charos Anvarovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      /* image: charos, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 8,
      name: "Zaynura Ramilevna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: zaynura, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 9,
      name: "Gulzoda Toshpulatovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: gulzoda, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 10,
      name: "Karen Nikolayevich",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: karen, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 11,
      name: "Ibrohim Erkin",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: ibrohim, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 12,
      name: "Feruza Faxriddinovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      /* image: feruza, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 13,
      name: "Sayyor Xurshidovich",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      /* image: sayyor, */ // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    {
      id: 14,
      name: "Fazilat Mamurjanovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: fazilat, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
    
    {
      id: 15,
      name: "Nasiba Asrorovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: nasiba, // Bu yerga ustoz rasmini qo'yasan jigar
      specialty: "React, JavaScript, UI/UX"
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Yuqori sarlavha qismi */}
        <div className="about-header">
          <span className="about-badge">O'quv Markazi Haqida</span>
          <h2 className="about-main-title">Knowledge House bilan Kelajakni Qurung</h2>
          <p className="about-subtitle">
            Biz har bir o'quvchiga individual yondashuv va eng zamonaviy metodikalar asosida sifatli ta'lim berishni maqsad qilganmiz.
          </p>
        </div>

        {/* Ma'lumotlar va vizual bloklar */}
        <div className="about-grid">
          
          {/* Chap tomon: Biz haqimizda asosiy matn */}
          <div className="about-info-card">
            <h3>Bizning Maqsadimiz</h3>
            <p className="about-text">  
              <strong>Knowledge House</strong> o'quv markazi zamonaviy dunyoda eng talabgir bo'lgan sohalar va fanlarni mukammal o'rgatish uchun tashkil etilgan. Bizda tillar, IT yo'nalishlari, abituriyentlar uchun chuqurlashtirilgan fanlar hamda bolajonlar uchun maxsus rivojlantiruvchi dasturlar tizimli ravishda olib boriladi.
            </p>
            
            <div className="about-features-list">
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <div className="feature-text">
                  <h4>Ikki Tildagi Guruhlar</h4>
                  <p>Bizda darslar ham rusiyzabon (русские классы), ham o'zbekzabon (o'zbek sinflari) o'quvchilar uchun birdek yuqori saviyada tashkil etiladi.</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">📅</span>
                <div className="feature-text">
                  <h4>Intensiv va Tizimli Darslar</h4>
                  <p>Har bir yo'nalish haftada belgilangan darslar (Oplata: 2 zanyatie) va oylik monitoring tizimi orqali nazorat qilinadi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng tomon: Markaz ko'rsatkichlari va Aloqa kartasi */}
          <div className="about-stats-sidebar">
            <div className="stats-box-grid">
              <div className="stat-card">
                <span className="stat-num">16+</span>
                <span className="stat-label">O'quv Yo'nalishlari</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">Sifat Kafolati</span>
              </div>
            </div>

            <div className="about-contact-accent-box">
              <h4>📞 Tezkor Aloqa:</h4>
              <p>Savollaringiz bormi? Bizga qo'ng'iroq qiling yoki ijtimoiy tarmoqlar orqali yozing:</p>
              
              <div className="about-phones">
                <a href="tel:+998955072525"><strong>+998 95 507-25-25</strong></a>
                <a href="tel:+998882212525"><strong>+998 88 221-25-25</strong></a>
                <a href="tel:+998954852525"><strong>+998 95 485-25-25</strong></a>
              </div>

             
            </div>
          </div>
        </div>

        {/* 🔥 SEKSIYA: USTOZLAR KAROBKASI (ENG PASTKI QISMDA) */}
        <div className="teachers-section">
          <div className="teachers-header">
            <span className="about-badge">Bizning Jamoa</span>
            <h3 className="teachers-main-title">Tajribali Ustozlarimiz</h3>
            <p className="teachers-subtitle">O'z sohasining professionallaridan dars oling va natijaga tezroq erishing.</p>
          </div>

          <div className="teachers-grid">
            {teachersData.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <div className="teacher-img-wrapper">
                  <img src={teacher.image} alt={teacher.name} className="teacher-img" />
                </div>
                <div className="teacher-info">
                  <h4 className="teacher-name">{teacher.name}</h4>
                  <span className="teacher-role">{teacher.role}</span>
                  <div className="teacher-meta">
                    <span className="teacher-exp">💼 {teacher.experience}</span>
                    <span className="teacher-spec">🎯 {teacher.specialty}</span>
                  </div>
                  
                  {/* 🔥 Ustoz profiliga unikal ID bo'yicha navigatsiya */}
                  <button 
                    className="teacher-profile-btn" 
                    onClick={() => navigate(`/teachers/${teacher.id}`)}
                  >
                    Profilni ko'rish →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;