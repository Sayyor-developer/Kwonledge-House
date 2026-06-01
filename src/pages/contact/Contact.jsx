// src/pages/contact/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import { FaTelegramPlane, FaInstagram, FaUserCheck } from 'react-icons/fa'; // 🌟 FaUserCheck admin ikonasi uchun qo'shildi
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998', 
    course: 'frontend'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("⚠️ Iltimos, ismingizni kiriting!");
      return;
    }
    if (formData.phone === '+998' || !formData.phone || formData.phone.length !== 13) {
      toast.error("⚠️ Iltimos, telefon raqamingizni to'g'ri kiriting!");
      return;
    }

    console.log("Supabase uchun ma'lumot:", formData);
    toast.success(`🚀 Ariza qabul qilindi! Yaqin orada aloqaga chiqamiz, ${formData.name}.`);
    setFormData({ name: '', phone: '+998', course: 'frontend' });
  };

  return (
    <div className="exclusive-contact-wrapper">
      {/* 🌌 Kosmik dinamik aura */}
      <div className="cosmic-blur-core"></div>
      <div className="cosmic-blur-secondary"></div>

      <div className="exclusive-container">
        
        {/* Yuqori qism: Minimalist asimmetrik sarlavha */}
        <div className="exclusive-header-zone">
          <div className="status-pill"><span></span> Aloqa markazi</div>
          <h1 className="exclusive-title">Kelajakni biz bilan <br /><span>boshlang</span></h1>
          <p className="exclusive-desc">
            Savollaringiz bormi yoki kurslarga yozilmoqchimisiz? Ma'lumot qoldiring, biz sizga eng qisqa vaqtda aloqaga chiqamiz.
          </p>
        </div>

        {/* 🍱 BENTO GRID TIZIMI */}
        <div className="bento-contact-grid">
          
          {/* Blok 1: Ariza Formasi */}
          <div className="bento-cell cell-form">
            <div className="cell-glow-border"></div>
            <div className="cell-inner">
              <div className="form-header">
                <h2>Bepul konsultatsiya</h2>
                <p>Ma'lumotlaringiz xavfsiz himoyalangan</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="bento-inner-form">
                <div className="interactive-input-group">
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label>Ismingiz</label>
                  <span className="input-focus-line"></span>
                </div>

                <div className="interactive-input-group">
                  <input 
                    type="text" 
                    required
                    maxLength={13}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.length < 4) {
                        setFormData({...formData, phone: '+998'});
                        return;
                      }
                      const filteredVal = val[0] === '+' 
                        ? '+' + val.slice(1).replace(/\D/g, '') 
                        : val.replace(/\D/g, '');
                      setFormData({...formData, phone: filteredVal});
                    }}
                  />
                  <label>Telefon raqamingiz</label>
                  <span className="input-focus-line"></span>
                </div>

                <div className="interactive-select-group">
                  <span className="select-tag">Yo'nalish</span>
                  <select 
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option value="Yo'nalish">Yo'nalishingizni tanlang</option>
                    <option value="ingliz tili">Ingliz tili (A1/A2, B1/B2)</option>
                    <option value="IT">Frontend</option>
                    <option value="ielts">IELTS/CEFR</option>
                    <option value="english">General English</option>
                    <option value="arab">Arab tili (A1/A2, B1/B2)</option>
                    <option value="mental">Mental arifmetikasi</option>
                    <option value="matematika">Matematika</option>
                    <option value="biologiya">Biologiya</option>
                    <option value="kimyo">Kimyo</option>
                    <option value="shaxmat">Shaxmat</option>
                    <option value="koreys">Koreys tili</option>
                    <option value="onatili">Ona tili va adabiyot</option>
                  </select>
                </div>

                <button type="submit" className="exclusive-submit-action">
                  <span>Arizani yuborish</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* 🌟 ARIZA TAGIDAGI PREMIUM IJTIMOIY TARMOQLAR BLOKI */}
                <div className="form-social-divider">
                  <span>Yoki bizni kuzating</span>
                </div>
                
                <div className="form-social-links">
                  <a 
                    href="https://t.me/knowledge_house_sam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn telegram-btn"
                    title="Telegram kanalimiz"
                  >
                    <FaTelegramPlane className="social-icon" />
                    <span>Telegram</span>
                  </a>
                  <a 
                    href="https://instagram.com/knowledge_house_sam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn instagram-btn"
                    title="Instagram sahifamiz"
                  >
                    <FaInstagram className="social-icon" />
                    <span>Instagram</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

          {/* Blok 2: Manzil */}
          <div className="bento-cell cell-info info-location">
            <div className="cell-inner">
              <div className="info-badge">Location</div>
              <h3>Bizning manzil</h3>
              <p>Samarqand shahri, Rasmiy xaritadagi manzil bo'yicha</p>
              <div className="bento-bg-vector">📍</div>
            </div>
          </div>

          {/* 🌟 Blok 3: Telefon va Admin bilan bog'lanish (O'zgartirilgan qism) */}
          <div className="bento-cell cell-info info-phone">
            <div className="cell-inner">
              <div className="info-badge">Hotline</div>
              <h3>Telefon raqam</h3>
              <p className="phone-highlight">+998 (95) 507-25-25</p>
              <p className="phone-highlight">+998 (88) 221-25-25</p>
              <p className="phone-highlight">+998 (95) 485-25-25</p>

              {/* 🔗 Telegram Admin havolasi */}
              <div className="admin-connect-zone">
                <span className="admin-divider-line"></span>
                <a 
                  href="https://t.me/Knowledge_house_Admin2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="admin-direct-btn"
                >
                  <FaUserCheck className="admin-btn-icon" />
                  <span>Admin bilan bog'lanish</span>
                </a>
              </div>

              <div className="bento-bg-vector">📞</div>
            </div>
          </div>

          {/* Blok 4: Email va Ish vaqti */}
          <div className="bento-cell cell-info info-meta">
            <div className="cell-inner">
              <div className="meta-row">
                <span>E-pochta:</span>
                <p>info@knowledgehouse.uz</p>
              </div>
              <div className="meta-line"></div>
              <div className="meta-row">
                <span>Ish vaqti:</span>
                <p>Dushanba — Shanba (09:00 - 21:00)</p>
              </div>
            </div>
          </div>

        </div>

        {/* 🗺 KNOWLEDGE HOUSE RASMIY GOOGLE MAPS LOKATSIYASI */}
        <div className="exclusive-map-zone">
          <div className="map-card-inner">
            
            <div className="map-info-side">
              <div className="status-pill"><span></span> Geo-lokatsiya</div>
              <h2>KNOWLEDGE HOUSE</h2>
              <p className="map-address-text">
                Biz sizni o'quv markazimizda kutamiz.
              </p>
              
              <div className="map-features">
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <div>
                    <h4>Aniq nuqta</h4>
                    <p>O'quv markazining tasdiqlangan lokatsiyasi</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <div>
                    <h4>Transport imkoniyati</h4>
                    <p>6-15-T3-T4 raqamli avtobuslar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-iframe-side">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142.577482466052!2d66.88722693067308!3d39.66571898109348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1b14049a4d3f%3A0x5ed500440ddce564!2sKnowledge%20House!5e0!3m2!1suz!2sus!4v1780139040243!5m2!1suz!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Knowledge House Official Map"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;