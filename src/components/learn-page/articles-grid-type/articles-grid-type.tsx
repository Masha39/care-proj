import Link from 'next/link'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import React from 'react'
import { Topic } from 'util/getTopicsToShow'
import styles from './articles-grid-type.module.scss'

export const ArticlesGridType = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  return (
    <>
      {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
        <div key={topicName} className={styles.article}>
          {topicArticles.articles.map((item, index) => {
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
      ))}
    </>
  )
}
