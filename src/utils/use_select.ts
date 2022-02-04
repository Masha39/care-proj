import { useEffect, useMemo, useState } from 'react'

import useTranslation from 'next-translate/useTranslation'

const SELECT_OPTION_ALL = 'ALL'

export const useSelect = () => {
  const { t } = useTranslation('common')

  const defaultLabel = t('all_topics')

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
