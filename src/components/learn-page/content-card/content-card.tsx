import Image from 'next/image'
import styles from './content-card.module.scss'

export const ContentCard = ({
  title,
  image,
  type
}: {
  title: string
  image: string
  type: string
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        layout="intrinsic"
      />
      <div>{type}</div>
      <h2 className={styles.card__title}>{title}</h2>
      <div>Learn more</div>
    </div>
  )
}
