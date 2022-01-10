import { useEffect, useMemo, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { ContentType } from 'components/content-type/content-type'

const CONTENT_TYPE_ALL = 'ALL'

export const useLearnContentType = () => {
  const { t } = useTranslation('static/learn')

  const defaultLabel = t('static/learn:all_content')

  const defaultType = useMemo(
    () => ({
      value: CONTENT_TYPE_ALL,
      label: defaultLabel,
      icon: ''
    }),
    [defaultLabel]
  )

  const types = t<ContentType[]>(
    'static/learn:content_types',
    { count: 'all' },
    { returnObjects: true }
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
