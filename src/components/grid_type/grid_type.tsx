import React, { Fragment } from 'react'

import Link from 'next/link'

import { ContentCard } from 'components/content_card/content_card'
import { Topic } from '~/utils/get_topics_to_show'

import styles from './grid_type.module.scss'

export const GridType = ({
  topicsToShow
}: {
  topicsToShow: Record<string, Topic>
}) => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
          <Fragment key={topicName}>
            {topicArticles.articles.map((item, index) => {
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
          </Fragment>
        ))}
      </div>
    </div>
  )
}
