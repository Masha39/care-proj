import { safeParse } from '~/utils/safe_parse'

import styles from './list.module.scss'

export const List = ({
  title,
  content
}: {
  title?: string
  content: string[]
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.list__title}>{title || null}</div>
      <ul className={styles.list__list}>
        {content.map((el, index) => {
          return (
            <li className={styles.list__item} key={index}>
              {safeParse(el)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
