import React from 'react'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.main}>
    <Header />

    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
)

export default Layout
