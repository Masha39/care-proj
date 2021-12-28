import React from "react";
import Image from "next/image";

// import styles from "landing_banner.module.scss";
import styles from "./landing_banner.module.scss";
import Logo from "../../../public/svg/landing_logo.svg";
import LogoMobile from "../../../public/svg/landing_logo_mobile.svg";
import mobile_logo_1 from "../../../public/assets/images/mobile_footer_logo_1.png";
import mobile_logo_2 from "../../../public/assets/images/mobile_footer_logo_2.png";
import mobile_logo_3 from "../../../public/assets/images/mobile_footer_logo_3.png";
import mobile_logo_4 from "../../../public/assets/images/mobile_footer_logo_4.png";

const landing_banner = () => {
  return (
    <div className={styles.landingBannerWrapper}>
      <div className={styles.landing_banner}>
        <div className={styles.landing_logo_wrapper}>
          <div className={styles.landing_logo}>
            <Logo />
          </div>
          <div className={styles.landing_logo_mobile}>
            <LogoMobile />
          </div>
          <div className={styles.landing_text}>
            An online platform helping caregivers care for <br /> themselves and
            others.
          </div>
          <button className={styles.landing_btn}>
            Explore Caregiver Tookit
          </button>
        </div>
      </div>
      <div className={styles.banner_footer_wrapper}>
        <div className={styles.mobile_footer_wrapper}>
          <div className={styles.mobile_footer_title}>
            Presented and supported by
          </div>
          <div className={styles.banner_footer_content}>
            <div className={styles.left_footer_content}>Presented by</div>
            <div className={styles.mobile_logo_1}>
              <Image
                src={mobile_logo_1}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.mobile_logo_2}>
              <Image
                src={mobile_logo_2}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.right_footer_content}>Supported by</div>
            <div className={styles.mobile_logo_3}>
              <Image
                src={mobile_logo_3}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.mobile_logo_4}>
              <Image
                src={mobile_logo_4}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing_banner;
