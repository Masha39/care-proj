import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { ContentCard } from 'components/learn-page/content-card/content-card'
import { Topic } from 'util/getTopicsToShow'

import styles from './articles-grid.module.scss'

export const ArticlesGrid = ({
  topicsToShow,
  setTopic
}: {
  topicsToShow: Record<string, Topic>
  setTopic: any
}) => {
  const { t } = useTranslation('common')

  return (
    <>
      {Object.entries(topicsToShow).map(([topicName, topic]) => {
        return (
          <div key={topicName} className={styles.articles}>
            <div className={styles.articles__wrapper}>
              <div className={styles.articles__topic}>{topicName}</div>
              <div className={styles.articles__description}>
                {topic.description}
              </div>
              <Link href={`/learn/${topic.articles[0].url}`}>
                <a>
                  <button className={styles.articles__button}>
                    {t('common:start')}
                  </button>
                </a>
              </Link>
              <button
                className={styles.articles__button}
                onClick={() => setTopic({ value: topicName, label: topicName })}
              >
                {`${t('common:show_all')} ${topic.articles.length} ${t(
                  'common:resources'
                )}`}
              </button>
            </div>
            {topic.articles.map((item, index) => {
              return (
                <Link href={`/learn/${item.url}`} key={index}>
                  <a className={styles.articles__content}>
                    <ContentCard
                      title={item.title}
                      image={item.image}
                      type={item.content_type.label}
                      icon={item.content_type.icon}
                    />
                  </a>
                </Link>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
