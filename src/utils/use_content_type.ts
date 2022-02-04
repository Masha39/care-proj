import { useEffect, useMemo, useState } from 'react'

import useTranslation from 'next-translate/useTranslation'

import { ContentType } from 'components/content_type/content_type'

const CONTENT_TYPE_ALL = 'ALL'

export const useContentType = (types: ContentType[]) => {
  const { t } = useTranslation('common')

  const defaultLabel = t('all_content')

  const defaultType = useMemo(
    () => ({
      value: CONTENT_TYPE_ALL,
      label: defaultLabel,
      icon: ''
    }),
    [defaultLabel]
  )

  const contentTypes = [defaultType, ...types]

  const [selectedContentType, setSelectedContentType] = useState(defaultType)

  useEffect(() => {
    setSelectedContentType(defaultType)
  }, [defaultType])

  return {
    defaultType,
    contentTypes,
    selectedContentType,
    setSelectedContentType
  }
}
