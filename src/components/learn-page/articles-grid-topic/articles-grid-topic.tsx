import Link from 'next/link'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import React from 'react'
import { Topic } from 'util/getTopicsToShow'
import styles from './articles-grid-topic.module.scss'

export const ArticlesGridTopic = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  return (
    <>
      {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
        <div key={topicName} className={styles.articles}>
          <div>
            {topicArticles.articles?.length ? (
              <div className={styles.articles__topic}>{topicName}</div>
            ) : (
              <div className={styles.articles__noTopic}>
                Sorry, we were not able to find any topics.
              </div>
            )}
          </div>

          <div className={styles.articles__list}>
            {topicArticles.articles?.map((item, index) => {
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
