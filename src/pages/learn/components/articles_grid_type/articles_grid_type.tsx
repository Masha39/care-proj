import React from 'react'

import Link from 'next/link'

import { ContentCard } from 'components/content_card/content_card'

import { Topic } from '../../utils/get_topics_to_show'
import styles from './articles_grid_type.module.scss'

export const ArticlesGridType = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
          <div key={topicName} className={styles.articles}>
            {topicArticles.articles.map((item, index) => {
              return (
                <div className={styles.articles__item} key={index}>
                  <Link href={`/learn/${item.url}`}>
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
        ))}
      </div>
    </div>
  )
}
