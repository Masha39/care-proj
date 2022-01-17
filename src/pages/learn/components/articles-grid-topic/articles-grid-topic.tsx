import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { ContentCard } from 'components/content-card/content-card'

import { Topic } from '../../utils/getTopicsToShow'
import styles from './articles-grid-topic.module.scss'

export const ArticlesGridTopic = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  const { t } = useTranslation('common')

  return (
    <>
      {Object.entries(topicsToShow).map(([topic, articles]) => (
        <div key={topic} className={styles.articles}>
          <div>
            {articles.articles?.length ? (
              <>
                <div className={styles.articles__topic}>{topic}</div>
                <div className={styles.articles__description}>
                  {articles.description}
                </div>
                <Link href={`/learn/${articles.articles[0].url}`}>
                  <a className={styles.articles__wrapper}>
                    <button className={styles.articles__button}>
                      {t('start')}
                    </button>
                  </a>
                </Link>
              </>
            ) : (
              <div className={styles.articles__noTopic}>
                Sorry, we were not able to find any topics.
              </div>
            )}
          </div>

          <div className={styles.articles__list}>
            {articles.articles?.map((item, index) => {
              return (
                <Link href={`/learn/${item.url}`} key={index}>
                  <a>
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
        </div>
      ))}
    </>
  )
}
