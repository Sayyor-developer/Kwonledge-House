import React, { useState } from 'react';
import './Results.css';

import Topic1 from '../../assets/topic1.jpg';
import Topic2 from '../../assets/topic2.jpg';
import Topic3 from '../../assets/topic3.jpg';
import Topic4 from '../../assets/topic4.jpg';
import Topic5 from '../../assets/topic5.jpg';

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const resultsData = [
    { id: 1, 
      name: "Asilbek Toshpo'latov", 
      type: "topic", 
      score: "IELTS 7.5", 
      teacher: "Mr. Samandar", 
      badge: "IELTS Kursi", 
      desc: "...", 
      image: Topic1 
    },
    { id: 2, 
      name: "Shahzoda Alimova", 
      type: "it", 
      score: "Frontend Developer", 
      teacher: "Mr. Sayyorbek", 
      badge: "IT & Frontend", 
      project: "Aminor-CRM", 
      desc: "...", 
      image: Topic2 },
    { id: 3, 
      name: "Diyorbek Murodov", 
      type: "ielts", 
      score: "IELTS 7.0", 
      teacher: "Ms. Madina", 
      badge: "IELTS Kursi", 
      desc: "...", 
      image: Topic3 },
    { id: 4, 
      name: "Jasur Nematov", 
      type: "it", 
      score: "React Web Developer", 
      teacher: "Mr. Sayyorbek", 
      badge: "IT & Frontend", 
      project: "Plaza Booking", 
      desc: "...", 
      image: Topic4 },
    { id: 5, 
      name: "Diyorbek Murodov", 
      type: "ielts", 
      score: "IELTS 7.0", 
      teacher: "Ms. Madina", 
      badge: "IELTS Kursi", 
      desc: "...", 
      image: Topic5 },
  ];

  const filteredResults = activeFilter === 'all' ? resultsData : resultsData.filter(item => item.type === activeFilter);

  return (
    <div className="results-page-container">
      <div className="results-header">
        <h1 className="results-main-title">Bizning Bitiruvchilar Natijalari</h1>
        <div className="results-filter-buttons">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>Hammasi</button>
          <button className={`filter-btn ${activeFilter === 'ielts' ? 'active' : ''}`} onClick={() => setActiveFilter('ielts')}>IELTS</button>
          <button className={`filter-btn ${activeFilter === 'it' ? 'active' : ''}`} onClick={() => setActiveFilter('it')}>IT</button>
        </div>
      </div>

      <div className="results-grid">
        {filteredResults.map((student) => (
          <div key={student.id} className="student-result-card">
            <div className="student-image-wrapper" onClick={() => window.open(student.image, '_blank')}>
              <img src={student.image} alt={student.name} className="student-img" />
              <span className={`student-type-badge ${student.type}`}>{student.badge}</span>
            </div>
            <div className="student-info-box">
              <h3 className="student-name">{student.name}</h3>
              <div className="result-detail-row">
                <span className="detail-label">Natija:</span>
                <span className="detail-value highlight">{student.score}</span>
              </div>
              {student.project && (
                <div className="result-detail-row">
                  <span className="detail-label">Loyiha:</span>
                  <span className="detail-value project-link">{student.project}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;