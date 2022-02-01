import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import { TypePolicy } from './index.page'

type Props = {
  item: TypePolicy
}

export const PrivacyPolicyContent = ({ item }: Props) => {
  const { t } = useTranslation('static/privacy_policy')
  return (
    <div className="container">
      <h1>{t('h1')}</h1>
      <p>{item.title}</p>
      <p>{item.description}</p>
    </div>
  )
}
