import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

export const useLearnContentType = () => {
  const { t } = useTranslation('static/learn')

  const contentTypes = t<ContentType[]>(
    'static/learn:content_types',
    { count: 'all' },
    { returnObjects: true }
  )

  const defaultType = contentTypes.find((el) => el.value === 'all')

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
