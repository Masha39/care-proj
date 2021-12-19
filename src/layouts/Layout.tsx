import React from 'react'
import Footer from '../components/Footer/Footer'

import styles from './Layout.module.scss'
import Header from '../components/Header/Header'

const Layout = ({children}) => (
    <div className={styles.main}>
     
      <Header />
      
      <div className={styles.content}>{children}</div>
      <Footer/> 
    </div>
)

export default Layout
