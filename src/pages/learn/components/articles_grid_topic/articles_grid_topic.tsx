import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from 'components/button/button'
import { ContentCard } from 'components/content_card/content_card'

import { Topic } from '../../utils/get_topics_to_show'
import styles from './articles_grid_topic.module.scss'

export const ArticlesGridTopic = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  const { t } = useTranslation('common')

  const router = useRouter()

  return (
    <div className="container">
      {Object.entries(topicsToShow).map(([topic, articles]) => (
        <div key={topic} className={styles.articles}>
          <div className={styles.articles__container}>
            {articles.articles?.length ? (
              <div className={styles.articles__header}>
                <div className={styles.articles__topic}>{topic}</div>
                <div className={styles.articles__description}>
                  {articles.description}
                </div>
                <div className={styles.articles__button}>
                  <Button
                    title={t('start')}
                    buttonStyle="primary_blue"
                    onClick={() => router.push(`/${articles.articles[0].url}`)}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.articles__noTopic}>
                {t('static/learn:sorry')}
              </div>
            )}
          </div>

          <div className={styles.articles__list}>
            {articles.articles?.map((item, index) => {
              return (
                <div className={styles.articles__item} key={index}>
                  <Link href={`/${item.url}`}>
                    <a>
                      <ContentCard
                        title={item.title}
                        image={item.image}
                        type={item.content_type.label}
                        icon={item.content_type.icon}
                      />
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
