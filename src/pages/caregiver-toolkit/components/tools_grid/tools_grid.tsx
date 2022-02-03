import { ContentCard } from 'components/content_card/content_card'
import { Topic } from '~/utils/get_topics_to_show'

import styles from './tools_grid.module.scss'

export const ToolsGrid = ({ topics }: { topics: Record<string, Topic> }) => {
  console.log(Object.entries(topics))
  return (
    <div className="container">
      {Object.entries(topics).map(([topicName, topic]) => {
        return (
          <div key={topicName} className={styles.tools}>
            <div className={styles.tools__topic}>{topicName}</div>
            <div className={styles.tools__wrapper}>
              {topic.articles.map((article, index) => {
                return (
                  <div className={styles.tools__item} key={index}>
                    <ContentCard
                      title={article.title}
                      image={article.image}
                      type={article.content_type.label}
                      icon={article.content_type.icon}
                      description={article.description}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
