import React from 'react';
import styles from './Social.module.scss'
import Youtube from '../../../public/svg/youtube.svg'
import Facebook from '../../../public/svg/facebook.svg'
import Instagram from '../../../public/svg/instagram.svg'
import Twitter from '../../../public/svg/twitter.svg'
const Socials = () => {
  return (
    <div className = {styles.wrapper}>
      <span>Find us on</span>
      <div className={styles.items}>
        <a href='https://www.youtube.com/channel/UCgi1hj3UIkjI2Gv44-V_oZQ?view_as=subscriber'><Youtube/></a>
        <a href='https://www.facebook.com/YourCareplus/'><Facebook/></a>
        <a href='https://www.instagram.com/yourcareplus/'><Instagram/></a>
        <a href='https://twitter.com/yourcareplus'><Twitter/></a>
      </div>
    </div>
  );
};

export default Socials;