import React from 'react'
import Footer from '../components/footer/footer'
import styles from './Layout.module.scss'
import Header from '../components/header/header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.main}>
    <Header />

    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
)

export default Layout
