import React from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik'

import styles from './contact_page_content.module.scss'

interface Values {
  firstName: string
  lastName: string
  email: string
}

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
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
              }}
              validateOnBlur
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 500)
              }}
            >
              {({ isSubmitting, handleBlur }) => (
                <Form>
                  <div className={styles.row}>
                    <div className={styles.item}>
                      <label htmlFor="firstName">First Name</label>
                      <Field name="firstName" onBlur={handleBlur} />
                    </div>
                    <div className={styles.item}>
                      <label htmlFor="lastName">Last Name</label>
                      <Field name="lastName" />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.item}>
                      <label htmlFor="email">Email</label>
                      <Field name="email" type="email" />
                    </div>
                    <div className={styles.item}>
                      <label htmlFor="subject">Subject</label>
                      <Field name="subject" />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.item}>
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        name="message"
                        type="textarea"
                        className={styles.textarea}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
