import Image from 'next/image'

import styles from './tips.module.scss'

export const Tips = ({
  title,
  boldText,
  tips,
  icon
}: {
  title?: string
  boldText?: string
  tips: string[]
  icon?: string
}) => {
  return (
    <div className={styles.tips}>
      <div className={styles.tips__wrapper}>
        {icon ? <Image src={icon} width={32} height={32} /> : null}
        <div className={styles.tips__title}>{title || null}</div>
      </div>
      <div className={styles.tips__text}>{boldText || null}</div>
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
