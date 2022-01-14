import Image from 'next/image'

import { ContentType } from 'components/content-type/content-type'

import styles from './content-card.module.scss'

export const ContentCard = ({
  title,
  image,
  type,
  icon
}: {
  title: string
  image: string
  type: string
  icon?: string
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Image src={`/images/${image}`} width={264} height={168} />
        <div className={styles.card__contentType}>
          <ContentType type={type} icon={icon} />
        </div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__link}>Learn more</div>
      </div>
    </div>
  )
}