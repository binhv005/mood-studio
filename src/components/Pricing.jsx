import React from 'react';
import { pricingPackages } from '../data/mood';

export default function Pricing({ onOpenBooking }) {
  const hasPackages = pricingPackages.length > 0;

  return (
    <section
      id="pricing"
      className="pricing-wave-section"
      style={{
        backgroundImage: "url('/images/mood/concept-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            BẢNG GIÁ THEO GÓI
          </span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            Choose Your Experience
          </h2>
          <p
            style={{
              maxWidth: '660px',
              margin: '0 auto',
              color: 'var(--color-text-muted)',
              fontSize: '0.98rem',
            }}
          >
            Lựa chọn gói chụp phù hợp với concept và nhu cầu của bạn.
          </p>
        </div>

        {hasPackages ? (
          <div className="pricing-wave-grid">
            {pricingPackages.map((pkg, i) => (
              <div key={pkg.id} className={`pricing-wave-card reveal reveal-up delay-${(i + 1) * 100}`}>
                <div className="pricing-wave-body">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', textAlign: 'center', marginBottom: '14px' }}>
                    {pkg.name}
                  </h3>
                  <div className="pricing-wave-price-row">
                    <span className="pricing-wave-num" style={{ fontSize: '1.75rem', color: 'var(--color-coral)', fontWeight: 800 }}>
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="pricing-wave-features">
                    {(pkg.features || []).map((feat) => (
                      <li key={feat} className="pricing-wave-feat-item">
                        <span className="pricing-wave-dot" style={{ backgroundColor: 'var(--color-coral)' }} />
                        <span className="pricing-wave-feat-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-wave-btn-wrap">
                    <button onClick={onOpenBooking} className="pricing-wave-buy-btn">ĐẶT LỊCH CHỤP</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Chưa có dữ liệu giá chính thức: hiển thị khối thông tin chờ cập nhật */
          <div
            className="reveal reveal-up"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              backgroundColor: 'rgba(255, 253, 249, 0.82)',
              border: '1px solid #EDE1D5',
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                color: 'var(--color-forest-dark)',
                marginBottom: '14px',
              }}
            >
              Bạn đang tìm concept phù hợp?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '26px' }}>
              Liên hệ MOOD Studio để tìm hiểu thông tin gói chụp và chi phí.
            </p>
            <button onClick={onOpenBooking} className="btn-resort-primary">
              Yêu cầu báo giá
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
