// src/pages/results/Results.jsx
import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // 🎓 Knowledge House Real Natijalari
  const resultsData = [
    {
      id: 1,
      name: "Asilbek Toshpo'latov",
      type: "ielts",
      score: "IELTS 7.5",
      teacher: "Mr. Samandar",
      badge: "IELTS Kursi",
      desc: "Qisqa muddat ichida Listening va Reading modullaridan yuqori ball to'plab, markazimizning eng zo'r natijalaridan birini qayd etdi.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Shahzoda Alimova",
      type: "it",
      score: "Frontend Developer",
      teacher: "Mr. Sayyorbek", // Siz o'rgatgan o'quvchi
      badge: "IT & Frontend",
      project: "Aminor-CRM", // Loyihasi
      desc: "React va Supabase texnologiyalaridan foydalanib, o'quv markazlari va bizneslar uchun daxshat boshqaruv tizimini mukammal qilib yaratdi.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Diyorbek Murodov",
      type: "ielts",
      score: "IELTS 7.0",
      teacher: "Ms. Madina",
      badge: "IELTS Kursi",
      desc: "Speaking va Writing bo'limlarida akademik darajada daxshat fikrlash qobiliyatini ko'rsatib, maqsadiga erishdi.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Jasur Nematov",
      type: "it",
      score: "React Web Developer",
      teacher: "Mr. Sayyorbek", // Siz o'rgatgan o'quvchi
      badge: "IT & Frontend",
      project: "Plaza Booking", // Loyihasi
      desc: "Restoranlar va bron qilish tizimlari uchun daxshat animatsiyali, barcha qurilmalarga moslashuvchan premium SPA platforma qurdi.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const filteredResults = activeFilter === 'all' 
    ? resultsData 
    : resultsData.filter(item => item.type === activeFilter);

  return (
    <div className="results-page-container">
      {/* Sarlavha qismi */}
      <div className="results-header">
        <div className="results-badge">KNOWLEDGE HOUSE MUAFFACQIYATLARI</div>
        <h1 className="results-main-title">Bizning Bitiruvchilar Natijalari</h1>
        <p className="results-sub-title">
          O'quvchilarimizning xalqaro IELTS imtihonlarida to'plagan yuqori ballari va zamonaviy IT sohasida yaratgan daxshat loyihalari bilan tanishing.
        </p>
        
        {/* Filtr tugmalari */}
        <div className="results-filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Hammasi
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ielts' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ielts')}
          >
            IELTS (Ingliz tili)
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'it' ? 'active' : ''}`}
            onClick={() => setActiveFilter('it')}
          >
            IT (Frontend Dasturlash)
          </button>
        </div>
      </div>

      {/* Kartochkalar Grid tarmog'i */}
      <div className="results-grid">
        {filteredResults.map((student) => (
          <div key={student.id} className="student-result-card">
            <div className="student-image-wrapper">
              <img src={student.image} alt={student.name} className="student-img" />
              <span className={`student-type-badge ${student.type}`}>{student.badge}</span>
            </div>
            
            <div className="student-info-box">
              <h3 className="student-name">{student.name}</h3>
              
              <div className="result-detail-row">
                <span className="detail-label">Natija:</span>
                <span className="detail-value highlight">{student.score}</span>
              </div>

              <div className="result-detail-row">
                <span className="detail-label">Mentor:</span>
                <span className="detail-value">{student.teacher}</span>
              </div>

              {student.project && (
                <div className="result-detail-row">
                  <span className="detail-label">Yaratgan loyihasi:</span>
                  <span className="detail-value project-link">{student.project}</span>
                </div>
              )}

              <p className="student-desc">{student.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;