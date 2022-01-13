import React from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

import styles from './contact_page_content.module.scss'

interface Values {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const ContactPageContent = () => {
  const validationsSchema = yup.object().shape({
    firstName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('First Name is a required field'),
    lastName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Last Name is a required field'),
    email: yup
      .string()
      .email('Email must be valid.')
      .required('Email is a required field'),
    subject: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Subject is a required field'),
    message: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Message is a required field')
  })
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
              validationSchema={validationsSchema}
            >
              {({
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                dirty
              }) => (
                <Form>
                  <div className={styles.row}>
                    <div className={styles.item}>
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.firstName && errors.firstName && (
                        <p className={styles.error}>{errors.firstName}</p>
                      )}
                    </div>

                    <div className={styles.item}>
                      <label htmlFor="lastName">Last Name</label>
                      <Field
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.lastName && errors.lastName && (
                        <p className={styles.error}>{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.item}>
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.email && errors.email && (
                        <p className={styles.error}>{errors.email}</p>
                      )}
                    </div>
                    <div className={styles.item}>
                      <label htmlFor="subject">Subject</label>
                      <Field
                        name="subject"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.subject && errors.subject && (
                        <p className={styles.error}>{errors.subject}</p>
                      )}
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
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.message && errors.message && (
                        <p className={styles.error}>{errors.message}</p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!isSubmitting && !dirty}
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
