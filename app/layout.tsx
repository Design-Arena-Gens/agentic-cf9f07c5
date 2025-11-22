export const metadata = {
  title: 'منتجات أمازون الإمارات - تحليل المنتجات الأكثر ربحية',
  description: 'اكتشف أفضل 5 منتجات جديدة في أمازون الإمارات مع طلب عالي ومنافسة منخفضة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
