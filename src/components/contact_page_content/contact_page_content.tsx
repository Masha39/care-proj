import React from 'react'

import cn from 'classnames'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
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
  const { t } = useTranslation('contact_page')
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.banner} />
      <div className="container">
        <div className={styles.content}>
          <h1>{t('static/contact_page:h1')}</h1>
          <p>{t('static/contact_page:description')}</p>
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
                      <label htmlFor="firstName">
                        {t('static/contact_page:firstName')}
                      </label>
                      <Field
                        className={cn(
                          touched.firstName &&
                            errors.firstName &&
                            styles.errorColor
                        )}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.firstName && errors.firstName && (
                        <p className={styles.error}>{errors.firstName}</p>
                      )}
                    </div>

                    <div className={styles.item}>
                      <label htmlFor="lastName">
                        {t('static/contact_page:lastName')}
                      </label>
                      <Field
                        className={cn(
                          touched.lastName &&
                            errors.lastName &&
                            styles.errorColor
                        )}
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
                      <label htmlFor="email">
                        {t('static/contact_page:email')}
                      </label>
                      <Field
                        className={cn(
                          touched.lastName &&
                            errors.lastName &&
                            styles.errorColor
                        )}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.email && errors.email && (
                        <p className={styles.error}>{errors.email}</p>
                      )}
                    </div>
                    <div className={styles.item}>
                      <label htmlFor="subject">
                        {t('static/contact_page:subject')}
                      </label>
                      <Field
                        className={cn(
                          touched.email && errors.email && styles.errorColor
                        )}
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
                      <label htmlFor="message">
                        {t('static/contact_page:message')}
                      </label>
                      <Field
                        className={cn(
                          styles.textarea,
                          touched.message && errors.message && styles.errorColor
                        )}
                        as="textarea"
                        name="message"
                        type="textarea"
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
                    {t('static/contact_page:submit')}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className={styles.devider} />
          <div className={styles.imagesWrapper}>
            <h2>{t('static/contact_page:h2')}</h2>
            <div className={styles.itemsWrapper}>
              <div className={styles.itemOffice}>
                <Image src="/office.png" width={320} height={190} />
                <p>{t('static/contact_page:p')}</p>
              </div>
              <div className={styles.itemMap}>
                <Image src="/map.png" width={350} height={257} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
