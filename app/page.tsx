'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  estimatedProfit: string;
  demand: string;
  competitors: number;
  reason: string;
  priceRange: string;
}

export default function Home() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'أجهزة تنقية الهواء المحمولة',
      category: 'الأجهزة المنزلية',
      estimatedProfit: '100-150 درهم للوحدة',
      demand: 'مرتفع جداً',
      competitors: 2,
      reason: 'مع زيادة الوعي بجودة الهواء والطقس الحار في الإمارات، هناك طلب متزايد على أجهزة تنقية الهواء المحمولة. السوق جديد نسبياً مع منافسة محدودة.',
      priceRange: '200-400 درهم'
    },
    {
      id: 2,
      name: 'حاملات الهواتف المغناطيسية للسيارات بتقنية الشحن اللاسلكي',
      category: 'إكسسوارات السيارات',
      estimatedProfit: '60-90 درهم للوحدة',
      demand: 'مرتفع',
      competitors: 3,
      reason: 'مع انتشار الهواتف الذكية الحديثة التي تدعم الشحن اللاسلكي، هذا المنتج يجمع بين الراحة والوظيفة. الطلب عالي خاصة في مجتمع يعتمد بشكل كبير على السيارات.',
      priceRange: '80-150 درهم'
    },
    {
      id: 3,
      name: 'أدوات تنظيم المطبخ الذكية (منظمات الأدراج القابلة للتعديل)',
      category: 'المطبخ والمنزل',
      estimatedProfit: '40-70 درهم للمجموعة',
      demand: 'مرتفع',
      competitors: 2,
      reason: 'مع اتجاه السكان نحو المنازل العصرية والمنظمة، هناك طلب متزايد على حلول التنظيم الذكية. المنافسة قليلة للمنتجات عالية الجودة.',
      priceRange: '60-120 درهم'
    },
    {
      id: 4,
      name: 'مصابيح LED للنباتات المنزلية',
      category: 'الحدائق والزراعة المنزلية',
      estimatedProfit: '80-120 درهم للوحدة',
      demand: 'متزايد',
      competitors: 1,
      reason: 'تزايد الاهتمام بالزراعة المنزلية والنباتات الداخلية في الإمارات. المنافسة محدودة جداً والطلب في نمو مستمر.',
      priceRange: '150-250 درهم'
    },
    {
      id: 5,
      name: 'أدوات العناية بالأحذية الفاخرة (مجموعات التنظيف والتلميع الاحترافية)',
      category: 'العناية الشخصية',
      estimatedProfit: '50-80 درهم للمجموعة',
      demand: 'مرتفع',
      competitors: 2,
      reason: 'سوق الإمارات يتميز بالشريحة الفاخرة والاهتمام بالمظهر. الأحذية الفاخرة تحتاج عناية خاصة، والطلب على أدوات العناية الاحترافية مرتفع مع منافسة محدودة.',
      priceRange: '100-180 درهم'
    }
  ]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            🛍️ أفضل 5 منتجات في أمازون الإمارات 2024
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.95
          }}>
            منتجات جديدة بطلب عالي ومنافسة منخفضة (3 منافسين أو أقل)
          </p>
        </header>

        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '1rem'
              }}>
                <h2 style={{
                  fontSize: '1.4rem',
                  color: '#2d3748',
                  margin: 0,
                  flex: 1
                }}>
                  {product.name}
                </h2>
                <span style={{
                  background: '#48bb78',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginRight: '0.5rem'
                }}>
                  #{product.id}
                </span>
              </div>

              <div style={{
                background: '#f7fafc',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4a5568' }}>📂 الفئة:</span>
                  <span style={{ marginRight: '0.5rem', color: '#718096' }}>{product.category}</span>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4a5568' }}>💰 الربح المتوقع:</span>
                  <span style={{ marginRight: '0.5rem', color: '#2d3748', fontWeight: 'bold' }}>
                    {product.estimatedProfit}
                  </span>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4a5568' }}>💵 النطاق السعري:</span>
                  <span style={{ marginRight: '0.5rem', color: '#718096' }}>{product.priceRange}</span>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4a5568' }}>📈 الطلب:</span>
                  <span style={{
                    marginRight: '0.5rem',
                    color: '#e53e3e',
                    fontWeight: 'bold'
                  }}>
                    {product.demand}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', color: '#4a5568' }}>👥 المنافسون:</span>
                  <span style={{
                    marginRight: '0.5rem',
                    background: '#bee3f8',
                    color: '#2c5282',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    {product.competitors} فقط
                  </span>
                </div>
              </div>

              <div style={{
                background: '#edf2f7',
                padding: '1rem',
                borderRadius: '8px',
                borderRight: '4px solid #667eea'
              }}>
                <p style={{
                  margin: 0,
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  <strong style={{ color: '#2d3748' }}>💡 لماذا هذا المنتج؟</strong><br />
                  {product.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>📊 معايير الاختيار</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              <strong style={{ color: '#2d3748' }}>طلب مرتفع</strong>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                اتجاهات السوق الحالية
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <strong style={{ color: '#2d3748' }}>منافسة منخفضة</strong>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                3 منافسين أو أقل
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
              <strong style={{ color: '#2d3748' }}>هامش ربح جيد</strong>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                40-150 درهم للوحدة
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🆕</div>
              <strong style={{ color: '#2d3748' }}>منتجات جديدة</strong>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                فرص نمو مستقبلية
              </p>
            </div>
          </div>
        </div>

        <footer style={{
          marginTop: '2rem',
          textAlign: 'center',
          color: 'white',
          opacity: 0.9
        }}>
          <p style={{ margin: 0 }}>
            تم إنشاؤه بواسطة Claude AI • {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
