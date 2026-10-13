import React from 'react';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import { contact, concepts } from '../data/mood';

const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const quickLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Danh sách concept', href: '#rooms' },
  { label: 'Bộ sưu tập', href: '#amenities' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Đặt lịch chụp', href: '#booking' },
];

const colTitle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.15rem',
  color: '#ffffff',
  marginBottom: '18px',
  paddingBottom: '6px',
  borderBottom: '2px solid #E8BFC9',
  display: 'inline-block',
};

export default function Contact() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA band */}
      <section
        id="contact"
        style={{
          backgroundImage: "url('/images/mood/pinkbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
        }}
      >
        <div className="container container-wide">
          <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Dancing Script', 'Alex Brush', cursive",
                fontSize: 'clamp(2.4rem, 4.6vw, 3.6rem)',
                color: '#111111',
                lineHeight: 1.15,
                marginBottom: '12px',
              }}
            >
              Let&apos;s Talk About Your Mood
            </h2>
            <p style={{ color: '#111111', lineHeight: 1.7, marginBottom: '22px' }}>
              Có ý tưởng cho một bộ ảnh riêng? Hãy trao đổi cùng MOOD Studio.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a href="#booking" onClick={(e) => handleLinkClick(e, '#booking')} className="btn-resort-primary">Gửi yêu cầu đặt lịch</a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="btn-resort-outline" style={{ color: '#111111', borderColor: '#111111' }}>Xem Facebook</a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer + Contact */}
      <footer
        style={{ position: 'relative', backgroundColor: '#161312', color: '#f5ede4', zIndex: 20, padding: '60px 0 35px 0', overflow: 'hidden' }}
      >
        <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
              gap: '40px 48px',
              marginBottom: '45px',
            }}
          >
            {/* Brand */}
            <div className="reveal reveal-up">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '4px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                MOOD <span style={{ color: '#E8BFC9' }}>STUDIO</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#c9bdb4', lineHeight: 1.7 }}>
                Studio nhiếp ảnh tại TP. Hồ Chí Minh.
              </p>
            </div>

            {/* Quick links */}
            <div className="reveal reveal-up delay-100">
              <h4 style={colTitle}>Khám Phá</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{ color: '#c9bdb4', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ChevronRight size={14} color="#E8BFC9" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="reveal reveal-up delay-200">
              <h4 style={colTitle}>Dịch Vụ</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {concepts.map((c) => (
                  <li key={c.id} style={{ color: '#c9bdb4', fontSize: '0.9rem' }}>{c.name}</li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="reveal reveal-up delay-300">
              <h4 style={colTitle}>Liên Hệ</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#c9bdb4' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <MapPin size={16} color="#E8BFC9" /> <span>{contact.city}</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} color="#E8BFC9" /> <span>{contact.phoneDisplay}</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <FacebookIcon size={16} color="#E8BFC9" />
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Facebook MOOD Studio</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: '0.85rem',
              color: '#c9bdb4',
            }}
          >
            <div>© {new Date().getFullYear()} <strong>MOOD Studio</strong>. Tất cả các quyền được bảo lưu.</div>
            <div>Your mood, your art, your story.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
