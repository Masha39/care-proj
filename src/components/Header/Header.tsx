import React, {useState} from 'react';
import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from '../../../public/svg/header_logo.svg'
import Socials from '../Socials/Socials';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [burgerBtnActive, setBurgerBtnActive] = useState(false)
  const items = [
    {value: 'Learn', href: '/learn'},
    {value: 'Caregiver Toolkit', href: '/caregiver-toolkit'},
    {value: 'Resources', href: '/resources'},
    {value: 'Contact Us', href: '/contact-us'}
  ]

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <header className={styles.header}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <Logo width={130} height={23}/>
              </a>
            </Link>
          </div>
          <div className={burgerBtnActive ? styles.burgerBtnActive : styles.burgerBtn} onClick={() => (setMenuActive(!menuActive), setBurgerBtnActive(!burgerBtnActive)) }>
            <span></span>
          </div>
          <nav className={styles.desktopMenu}>
            <ul className={styles.headerList}>
              {items.map((item, i) => (
                <li key={i} >
                  <Link href={item.href} >{item.value}</Link>
                </li>
              ))}
            </ul>
          </nav> 
        </header>
      </div>
      <nav className={menuActive ? styles.menuActive : styles.mobileMenu}>
        <ul className={styles.headerList}>
          {items.map((item, i) => (
            <li key={i}>
              <Link href={item.href} >{item.value}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.socialWrapper}>
          <span>Find us on</span>
          <Socials/>
        </div>
        
      </nav>
  </div>
    
  );
};

export default Header;