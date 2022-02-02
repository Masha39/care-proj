import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from 'components/button/button'
import { Carousel } from 'components/carousel/carousel'
import { ContentCard } from 'components/content_card/content_card'

import { Topic } from '../../utils/get_topics_to_show'
import styles from './articles_grid.module.scss'

export const ArticlesGrid = ({
  topicsToShow,
  setTopic
}: {
  topicsToShow: Record<string, Topic>
  setTopic: any
}) => {
  const { t } = useTranslation('common')

  const router = useRouter()

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
              <div className={styles.buttons_desktop}>
                <div className={styles.articles__buttons}>
                  <Button
                    title={t('start')}
                    buttonStyle="primary_blue"
                    onClick={() => router.push(`/${topic.articles[0].url}`)}
                  />
                  <Button
                    title={`${t('show_all')} ${topic.articles.length} ${t(
                      'resources'
                    )}`}
                    buttonStyle="secondary"
                    onClick={() =>
                      setTopic({ value: topicName, label: topicName })
                    }
                  />
                </div>
              </div>
            </div>
            <Carousel>
              {topic.articles.map((item, i) => {
                return (
                  <Link href={`/${item.url}`} key={i}>
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
            </Carousel>
            <div className={styles.buttons_mobile}>
              <div className={styles.articles__buttons}>
                <Button
                  title={t('start')}
                  buttonStyle="primary_blue"
                  onClick={() => router.push(`/${topic.articles[0].url}`)}
                />
                <Button
                  title={`${t('show_all')} ${topic.articles.length} ${t(
                    'resources'
                  )}`}
                  buttonStyle="secondary"
                  onClick={() =>
                    setTopic({ value: topicName, label: topicName })
                  }
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
