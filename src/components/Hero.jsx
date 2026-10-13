import React from 'react';
import AutoSlideshow from './AutoSlideshow';

// Ảnh ngang, chủ thể nằm giữa/phải khung để chữ bên trái không che gương mặt
const heroImages = [
  { src: '/images/mood/mood-10.jpg', alt: 'Tà voan bay cùng nón lá trước cổng gỗ - MOOD Studio', pos: '60% 40%' },
  { src: '/images/mood/mood-14.jpg', alt: 'Áo dài trắng trong sân đình - MOOD Studio', pos: '50% 40%' },
  { src: '/images/mood/mood-13.jpg', alt: 'Cận cảnh dưới vành nón lá - MOOD Studio', pos: '55% 45%' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-full">
      {/* Full-bleed photo, fading out to the left */}
      <div className="hero-full-bg">
        <AutoSlideshow images={heroImages} interval={5500} eager />
      </div>

      <div className="container container-wide hero-full-content">
        <div className="reveal reveal-up hero-full-text">
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)', letterSpacing: '4px' }}>
            A SPACE FOR YOUR MOOD
          </span>
          <h1
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(3.6rem, 8vw, 6.6rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            MOOD Studio
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
              color: 'var(--color-forest)',
              marginBottom: '14px',
            }}
          >
            Your mood, your art, your story.
          </p>
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '420px',
              lineHeight: 1.7,
              marginBottom: '26px',
            }}
          >
            Mỗi concept là một câu chuyện riêng qua ánh sáng, trang phục và cảm xúc.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button className="btn-resort-primary" onClick={() => scrollTo('rooms')}>
              Khám phá concept
            </button>
            <button className="btn-resort-outline" onClick={() => scrollTo('booking')}>
              Đặt lịch chụp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
