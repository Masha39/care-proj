import { useEffect, useMemo, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

const SELECT_OPTION_ALL = 'ALL'

export const useLearnSelect = () => {
  const { t } = useTranslation('static/learn')

  const defaultLabel = t('topics')

  const defaultValue = useMemo(
    () => ({
      value: SELECT_OPTION_ALL,
      label: defaultLabel
    }),
    [defaultLabel]
  )

  const [selectedTopic, setSelectedTopic] = useState(defaultValue)

  useEffect(() => {
    setSelectedTopic(defaultValue)
  }, [defaultValue])

  return { defaultValue, selectedTopic, setSelectedTopic }
}
