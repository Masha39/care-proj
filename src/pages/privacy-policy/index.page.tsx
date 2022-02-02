import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import Layout from 'layouts/layout'

import { PrivacyPolicyContent } from './privacy_policy_content'

export type TypePolicy = {
  title: string
  description: string
  descriptionAdd: string
  list: string[]
  h1: string
}

const PrivacyPolicy = () => {
  const { t } = useTranslation('static/privacy_policy')
  const policyData = t<TypePolicy[]>(
    'static/privacy_policy:privacy_policy',
    { count: 1 },
    { returnObjects: true }
  )
  return (
    <Layout>
      {policyData.map((item, index) => (
        <PrivacyPolicyContent item={item} key={index} />
      ))}
    </Layout>
  )
}

export default PrivacyPolicy
