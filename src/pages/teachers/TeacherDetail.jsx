// src/pages/teachers/TeacherDetail.jsx
import React, { useEffect, useState } from 'react'; // 🔥 useState qo'shildi
import { useParams, useNavigate } from 'react-router-dom';
import './TeacherDetail.css';
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

const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 🔥 Rasmni kattalashtirib ko'rsatish (Modal) uchun dynamic holat
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const teachersData = {
    1: {
      name: "Sarvinoz Baxtiyarovna",
      role: "Senior Frontend Developer & IT Instructor",
      experience: "3+ yil tajriba",
      image: sarvinoz, 
      bio: "Frontend sohasida ko'plab real loyihalar muallifi va tajribali mentor. O'quvchilarga React frameworki, zamonaviy UI/UX arxitekturasi va Supabase kabi ma'lumotlar bazasi bilan ishlashni amaliy loyihalar orqali o'rgatadi.",
      skills: ["HTML5 / CSS3 / SASS", "JavaScript (ES6+)", "React.js & Redux Toolkit", "Supabase & Git/GitHub", "Tailwind CSS & Ant Design"],
      schedule: "Dushanba, Chorshanba, Juma (15:00 - 17:00 / 18:30 - 20:30)",
      achievements: "200+ dan ortiq bitiruvchilar, ulardan 40% dan ortig'i hozirda IT kompaniyalarda faoliyat yuritadi."
    },
    2: {
      name: "Faina Ramilevna",
      role: "IELTS / CEFR Coordinator",
      experience: "4 yil tajriba",
      image: faina, 
      bio: "Xalqaro sertifikatlarga ega ingliz tili mutaxassisi. IELTS Mode AI va innovatsion intensiv o'qitish metodologiyalari asosida o'quvchilarni qisqa muddatda yuqori natijalarga olib chiqish bo'yicha kuchli tajribaga ega.",
      skills: ["IELTS Preparation", "CEFR B2/C1 Classes", "General English", "Academic Writing", "Spoken English"],
      schedule: "Seshanba, Payshanba, Shanba (09:00 - 11:00 / 14:00 - 16:00)",
      achievements: "O'quvchilarining o'rtacha IELTS ko'rsatkichi 7.0 dan yuqori. Eng yuqori natija - 8.5"
    },
    3: {
      name: "Madina Shavkatovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      /* image: madina, */ 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasни optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarни qurishни noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    }, 
    4: {
       name: "Vasila Uktamovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: vasila, 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    }, 
    5: {
       name: "Muhayyo Shuxratovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      /* image: muhayyo, */ 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    6: {
       name: "Ozoda Tojieva",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
     /* image: ozoda, */ 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    7: {
       name: "Charos Anvarovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      /* image: charos, */ 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    8: {
       name: "Zaynura Ramilevna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: zaynura, 
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    9: {
       name: "Gulzoda Toshpulatovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: gulzoda,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    10: {
       name: "Karen Nikolayevich",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: karen,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    11: {
       name: "Ibroxim Erkin",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: ibrohim,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    12: {
       name: "Feruza Faxriddinovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      // image: feruza,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    13: {
       name: "Sayyor Xurshidovich",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      // image: sayyor,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    14: {
       name: "Fazilat Mamurjanovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: fazilat,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    },
    15: {
       name: "Nasiba Asrorovna",
      role: "Backend & Data Engineer",
      experience: "2+ yil tajriba",
      image: nasiba,
      bio: "Murakkab server tizimlari va ma'lumotlar bazasini optimallashtirish bo'yicha mutaxassis. O'quvchilarga Node.js, APIlar bilan ishlash va xavfsiz backend arxitekturalarini qurishni noldan o'rgatadi.",
      skills: ["Node.js & Express", "PostgreSQL & Supabase", "RESTful API / GraphQL", "System Architecture", "Web Security"],
      schedule: "Dushanba, Chorshanba, Juma (09:00 - 11:00 / 16:30 - 18:30)",
      achievements: "Yirik startaplar va CRM tizimlarining arxitektura muallifi."
    }
  };

  const teacher = teachersData[id];

  if (!teacher) {
    return (
      <div className="cyber-teacher-not-found">
        <h2>Profil aniqlanmadi</h2>
        <button onClick={() => navigate('/about')}>Jamoaga qaytish</button>
      </div>
    );
  }

  return (
    <div className="cyber-teacher-page">
      <div className="cyber-mesh-glow"></div>

      <div className="cyber-teacher-container">
        
        <button className="cyber-back-team-btn" onClick={() => navigate('/about')}>
          <span className="arrow-left"></span> Jamoaga qaytish
        </button>

        <div className="cyber-profile-layout">
          
          {/* Chap Tomon - Profil Vizuali */}
          <div className="cyber-profile-aside">
            {/* 🔥 onClick qo'shildi: bosganda holat true bo'ladi */}
            <div className="cyber-avatar-wrapper" onClick={() => setIsImageOpen(true)}>
              <img src={teacher.image} alt={teacher.name} className="clickable-avatar" />
              <div className="avatar-zoom-hint">Kattalashtirish 🔍</div>
            </div>
            <h1 className="cyber-profile-name">{teacher.name}</h1>
            <span className="cyber-profile-role">{teacher.role}</span>
            <div className="cyber-badge-experience">{teacher.experience}</div>
          </div>

          {/* O'ng Tomon - Batafsil Ma'lumotlar */}
          <div className="cyber-profile-main">
            <div className="cyber-info-section">
              <h3>Ekspert haqida</h3>
              <p className="cyber-bio-p">{teacher.bio}</p>
            </div>

            <div className="cyber-info-section">
              <h3>Texnik stek va ko'nikmalar</h3>
              <div className="cyber-skills-flex">
                {teacher.skills.map((skill, index) => (
                  <span key={index} className="cyber-skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="cyber-info-section">
              <h3>Dars jadvali</h3>
              <div className="cyber-schedule-box">
                <span className="schedule-indicator"></span>
                <p>{teacher.schedule}</p>
              </div>
            </div>

            <div className="cyber-info-section">
              <h3>Natijalar va yutuqlar</h3>
              <p className="cyber-achieve-p">{teacher.achievements}</p>
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 FULL-SCREEN IMAGE MODAL SYSTEM (Rasm to'liq ochiladigan qismi) */}
      {isImageOpen && (
        <div className="cyber-image-modal-overlay" onClick={() => setIsImageOpen(false)}>
          <div className="cyber-modal-close-btn">&times;</div>
          <div className="cyber-modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={teacher.image} alt={teacher.name} className="cyber-modal-full-img" />
            <div className="cyber-modal-caption">{teacher.name} — Full Profile Photo</div>
          </div>
        </div>
      )}

    </div>
  );
};

export default TeacherDetail;