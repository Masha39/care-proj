import React from 'react';
import styles from './Footer.module.scss'
import Logo1 from '../../../public/svg/footer_logo_1.svg'
import Logo2 from '../../../public/svg/footer_logo_2.svg'
import Logo3 from '../../../public/svg/footer_logo_3.svg'
import Logo4 from '../../../public/svg/footer_logo_4.svg'

const Footer = () => {
  return (
    <div className='container'>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.itemWrapperLeft}>
            <span>Presented by</span>
              <Logo1 width={79} height={48} className={styles.itemMt}/>
              <Logo2 width={90} height={32} className={styles.item}/>
          </div>
          <div className={styles.itemWrapperRight}>
            <span>Supported by</span>
              <Logo3 width={164} height={32} className={styles.item}/>
              <Logo4 width={81} height={32} className={styles.item}/>

          </div>
        </div>
        <hr/>
        
      </footer>
    </div>
  );
};

export default Footer;