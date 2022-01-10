import Link from 'next/link'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import React from 'react'
import { Topic } from 'util/getTopicsToShow'
import styles from './articles-grid.module.scss'

export const ArticlesGrid = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
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
