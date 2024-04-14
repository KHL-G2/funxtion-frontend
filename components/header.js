import styles from '../styles/header.module.css'
import { List, Search } from 'react-bootstrap-icons'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <List /> WEBTOON
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="제목/작가로 검색할 수 있습니다." />
        <Search />
      </div>
      <div className={styles.rightContainer}>
        <button>Login</button>
      </div>
    </header>
  )
}
