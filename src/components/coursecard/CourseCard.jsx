// src/components/coursecard/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ id, title, description, duration, price, category, icon, style }) => {
  const navigate = useNavigate();

  return (
    <div className="premium-course-card" style={style}>
      <div className="card-top-row">
        <div className="course-card-icon-box">{icon || "📖"}</div>
        <span className={`course-card-badge tag-${category?.toLowerCase()}`}>{category}</span>
      </div>

      <div className="card-main-body">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-description">{description}</p>
      </div>

      <div className="card-footer-info">
        <div className="footer-info-item">
          <span>Davomiyligi:</span>
          <strong>{duration}</strong>
        </div>
        <div className="footer-info-item">
          <span>Narxi:</span>
          <span className="info-value-price">{price}</span>
        </div>

        <button className="card-batafsil-btn" onClick={() => navigate(`/courses/${id}`)}>
          Batafsil ma'lumot →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;