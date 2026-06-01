// src/components/TelegramWidget/TelegramWidget.jsx
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react'; // 🔥 Senda mavjud bo'lgan ikonka
import { useLanguage } from '../../context/LanguageContext';
import './TelegramWidget.css';

const TelegramWidget = () => {
  const { currentLang } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  // 🌐 Widget ichidagi kichik xabarnoma tarjimalari
  const widgetText = {
    uz: { title: "Mutaxassis", body: "Savollaringiz bormi? Admin bilan telegramda bog'laning va tezkor javob oling!" },
    ru: { title: "Специалист", body: "Есть вопросы? Свяжитесь с админом в Telegram и получите быстрый ответ!" },
    en: { title: "Expert", body: "Have questions? Contact the admin on Telegram and get a quick response!" }
  };

  const t = widgetText[currentLang] || widgetText['uz'];

  useEffect(() => {
    // Sayt ochilgandan 3 soniya o'tib kichkina yordamchi oyna avtomat ochiladi
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tg-widget-container s">
      {/* 💬 `image_0e01a8.jpg` dagi kabi kichik yordamchi popup oyna */}
      {showTooltip && (
        <div className="tg-tooltip-box s">
          <button className="tg-close-btn" onClick={() => setShowTooltip(false)}>×</button>
          <div className="tg-tooltip-content">
            <strong>{t.title}</strong>
            <p>{t.body}</p>
          </div>
        </div>
      )}

      {/* 🚀 Haqiqiy Telegram suzuvchi tugmasi */}
      <a 
        href="https://t.me/your_telegram_username" // 👈 Bu yerga adminga olib o'tadigan linkni yoz jigar
        target="_blank" 
        rel="noopener noreferrer" 
        className="tg-floating-btn s"
        aria-label="Telegram Admin"
      >
        <Send size={24} className="tg-icon" />
      </a>
    </div>
  );
};

export default TelegramWidget;