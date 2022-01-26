import styles from './list.module.scss'

export const List = ({
  title,
  content
}: {
  title: string
  content: string[]
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.list__title}>{title}</div>
      <ul className={styles.list__list}>
        {content.map((el, index) => {
          return (
            <li className={styles.list__item} key={index}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
