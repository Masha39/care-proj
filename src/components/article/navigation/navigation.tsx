import Link from 'next/link'
import styles from './navigation.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Link href="/learn/">
        <a>
          <div className={styles.nav__wrapper}>
            <div className={styles.nav__text}>Explore all topics in:</div>
            <div className={styles.nav__link}>Learn</div>
          </div>
        </a>
      </Link>
    </div>
  )
}
