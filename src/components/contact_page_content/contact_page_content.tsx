import React from 'react'
import styles from './contact_page_content.module.scss'

const ContactPageContent = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.banner} />
      <div className="container">
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <p>
            Complete this form to contact a member of our team with feedback,
            questions, or concerns
          </p>
          <div className={styles.inputWrapper}>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
