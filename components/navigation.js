'use client'

import styles from '@/styles/navigation.module.css'
import Link from 'next/link'
import { House, Lightning, ViewList, PersonCircle } from 'react-bootstrap-icons'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const path = usePathname()
  console.log(path)
  return (
    <>
      {!path.startsWith('/auth') ? (
        <nav className={styles.navigation}>
          <div className={styles.mainNavigation}>
            <Link href="/">
              <House />
              <span>홈</span>
            </Link>
            <Link href="/webtoon">
              <ViewList />
              <span>웹툰</span>
            </Link>
            <Link href="/challange">
              <Lightning />
              <span>도전작가</span>
            </Link>
          </div>

          <hr />
          <div className={styles.subscribeContainer}>
            <Link href="/">
              <PersonCircle />
              관심웹툰
            </Link>
            <Link href="/">
              <PersonCircle />
              최근 본
            </Link>
          </div>

          <hr />
          <div className={styles.subscribeContainer}>
            <h2>구독</h2>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
            <Link href="/">
              <PersonCircle />
              작가1
            </Link>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  )
}
