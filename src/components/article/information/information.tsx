import styles from './information.module.scss'

export const Information = ({
  title,
  paragraphs
}: {
  title: string
  paragraphs: string[]
}) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.info__title}>{title}</h2>
      {paragraphs.map((el, index) => {
        return (
          <p className={styles.info__text} key={index}>
            {el}
          </p>
        )
      })}
    </div>
  )
}
