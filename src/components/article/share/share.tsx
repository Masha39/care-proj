import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton
} from 'react-share'

import EmailIcon from 'svg/email.svg'
import FacebookIcon from 'svg/facebook.svg'
import TwitterIcon from 'svg/twitter.svg'

import styles from './share.module.scss'

export const Share = () => {
  const url = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className={styles.share}>
      <div className={styles.share__text}>Share</div>
      <div className={styles.share__links}>
        <FacebookShareButton url={url} className={styles.share__link}>
          <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton url={url} className={styles.share__link}>
          <TwitterIcon />
        </TwitterShareButton>
        <EmailShareButton url={url} className={styles.share__link}>
          <EmailIcon />
        </EmailShareButton>
      </div>
    </div>
  )
}
