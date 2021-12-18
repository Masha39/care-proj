import React from 'react'
import Footer from '../components/Footer/Footer'

import styles from './Layout.module.scss'
import Header from '../components/Header/Header'

const Layout = ({}) => (
  <div >
    <div className={styles.main}>
     
      <Header />
      {/* <Footer/> */}
      <div className={styles.content}></div>
      {/* <Footer /> */}
    </div>
  </div>
)

export default Layout
