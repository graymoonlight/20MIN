import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';

export const metadata = {
  title: 'ProjectV',
  description: 'Web-app project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
