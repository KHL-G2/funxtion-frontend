import Header from '@/components/header'
import Navigation from '@/components/navigation'
import '../styles/global.css'
import styles from '@/styles/root-layout.module.css'

export const metadata = {
  title: {
    template: '%s | Webtoon',
    default: 'Home',
  },
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className={styles.main}>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
