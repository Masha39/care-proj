import Image from 'next/image'
import styles from './tips.module.scss'

export const Tips = ({
  title,
  tips,
  icon
}: {
  title: string
  tips: string[]
  icon?: string
}) => {
  return (
    <div className={styles.tips}>
      <div className={styles.tips__wrapper}>
        {icon ? <Image src={icon} width={32} height={32} /> : null}
        <div className={styles.tips__title}>{title}</div>
      </div>
      <ul className={styles.tips__list}>
        {tips.map((el, index) => {
          return (
            <li className={styles.tips__item} key={index}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
