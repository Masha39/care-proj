import cn from 'classnames'
import Link from 'next/link'

import { Share } from 'components/article/share/share'

import styles from './sidebar.module.scss'

export const Sidebar = ({
  topic,
  articles,
  title
}: {
  topic: string
  articles: ArticlePreview[]
  title: string
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__topic}>{topic}</div>
      <div className={styles.sidebar__container}>
        {articles.map((article, index) => {
          const isActive = article.title === title
          return (
            <Link href={`/learn/${article.url}`} key={index}>
              <a
                className={cn(styles.item, {
                  [`${styles.item__active}`]: isActive
                })}
              >
                {article.title}
              </a>
            </Link>
          )
        })}
      </div>

      <Share />
    </div>
  )
}
