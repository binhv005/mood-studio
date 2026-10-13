import React from 'react';
import AutoSlideshow from './AutoSlideshow';

export default function About({ onOpenBooking }) {
  // 3 Vertical Portrait Photos matching the 3-column reference sample
  const photos = [
    { id: 1, images: [2, 3, 4, 5].map((n) => `/images/mood/mood-${String(n).padStart(2, '0')}.jpg`), alt: 'Concept nữ tính với voan hồng và hoa pastel', delayClass: 'delay-100', pos: 'center 25%' },
    { id: 2, images: [9, 8, 7, 11].map((n) => `/images/mood/mood-${String(n).padStart(2, '0')}.jpg`), alt: 'Concept cổ trang áo dài trắng cùng nón lá cài hoa', delayClass: 'delay-200', pos: 'center 30%' },
    { id: 3, images: [6, 1, 13, 12].map((n) => `/images/mood/mood-${String(n).padStart(2, '0')}.jpg`), alt: 'Chân dung nghệ thuật cài hoa hồng, tông hồng pastel', delayClass: 'delay-300', pos: 'center 25%' },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        backgroundColor: '#FFFDF9',
        paddingTop: '75px',
        paddingBottom: '30px',
        overflow: 'hidden',
      }}
    >
      <div className="container container-wide">
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            VỀ MOOD STUDIO
          </span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '10px',
              textShadow: '0 2px 8px rgba(169, 103, 123, 0.14)',
            }}
          >
            Không chỉ là một bức ảnh
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            <strong>Phong cách riêng</strong>, <strong>bối cảnh</strong>, <strong>trang phục</strong>, <strong>màu sắc</strong> và <strong>cảm xúc</strong> cùng kể một câu chuyện bằng hình ảnh.
          </p>
        </div>

        {/* 3-Column Equal Height Portrait Gallery (Pure Photos, No Text) */}
        <div
          className="reveal reveal-up delay-150"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 24px)',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${photo.delayClass} zoom-hover`}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4',
                maxHeight: '520px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                backgroundColor: '#f3ede4',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(16, 59, 43, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <AutoSlideshow images={photo.images} alt={photo.alt} interval={4200} startDelay={photo.id * 1200} defaultPos={photo.pos} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #about .reveal.reveal-up.delay-150 {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
