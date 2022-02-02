import React, { useCallback } from 'react'

import useTranslation from 'next-translate/useTranslation'

import { ContentType } from 'components/content_type/content_type'
import { Select } from 'components/select/select'

import styles from './filters.module.scss'

export const Filters = ({
  topics,
  contentTypes,
  defaultSelectValue,
  selectedTopic,
  selectedContentType,
  setSelectedTopic,
  setSelectedContentType
}: {
  topics: any
  contentTypes: ContentType[]
  defaultSelectValue: SelectOption
  selectedTopic: SelectOption
  selectedContentType: ContentType
  setSelectedTopic: Function
  setSelectedContentType: Function
}) => {
  const { t } = useTranslation('common')

  const selectOptions = useCallback(() => {
    const arr: SelectOption[] = [defaultSelectValue]
    Object.entries(topics).map(([topic]) =>
      arr.push({ value: topic, label: topic })
    )
    return arr
  }, [topics, defaultSelectValue])

  return (
    <div className="container">
      <div className={styles.filters}>
        <div className={styles.select}>
          <div className={styles.select__title}>{t('topic')}</div>
          <Select
            value={selectedTopic}
            options={selectOptions()}
            onChange={(selected: SelectOption) => setSelectedTopic(selected)}
          />
        </div>
        <div className={styles.filters_scroll_wrapper}>
          <div className={styles.filters__contentType}>
            <div className={styles.filters__title}>{t('content_type')}</div>
            {contentTypes.map((type, index) => (
              <div className={styles.filters__tag} key={index}>
                <ContentType
                  icon={type.icon}
                  type={type.label}
                  isClickable
                  isActive={selectedContentType?.label === type.label}
                  onClick={() =>
                    setSelectedContentType({
                      label: type.label,
                      value: type.value,
                      icon: type.icon
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
