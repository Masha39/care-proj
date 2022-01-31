import { safeParse } from '~/utils/safe_parse'

import styles from './information.module.scss'

export const Information = ({
  title,
  paragraphs
}: {
  title?: string
  paragraphs: string[]
}) => {
  return (
    <div className={styles.info}>
      {title ? <h2 className={styles.info__title}>{title}</h2> : null}
      {paragraphs.map((el, index) => {
        return (
          <p className={styles.info__text} key={index}>
            {safeParse(el)}
          </p>
        )
      })}
    </div>
  )
}
