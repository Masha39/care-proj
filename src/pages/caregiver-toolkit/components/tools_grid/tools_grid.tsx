import Link from 'next/link'

import { Carousel } from 'components/carousel/carousel'
import {
  ContentCard,
  ContentCardSize
} from 'components/content_card/content_card'
import { Topic } from '~/utils/get_topics_to_show'

import styles from './tools_grid.module.scss'

export const ToolsGrid = ({ topics }: { topics: Record<string, Topic> }) => {
  return (
    <div className="container">
      {Object.entries(topics).map(([topicName, topic]) => {
        return (
          <div key={topicName} className={styles.tools}>
            <div className={styles.tools__topic}>{topicName}</div>
            <Carousel className="large">
              {topic.articles.map((article, index) => {
                return (
                  <Link href={`/learn/${article.url}`} key={index}>
                    <a className={styles.tools__card}>
                      <div className={styles.tools__item}>
                        <ContentCard
                          title={article.title}
                          image={article.image}
                          type={article.content_type.label}
                          icon={article.content_type.icon}
                          description={article.description}
                          size={ContentCardSize.large}
                        />
                      </div>
                    </a>
                  </Link>
                )
              })}
            </Carousel>
          </div>
        )
      })}
    </div>
  )
}
