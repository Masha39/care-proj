import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import { ContentType } from 'components/content_type/content_type'

import styles from './content_card.module.scss'

export enum ContentCardSize {
  large,
  medium,
  small
}

export const ContentCard = ({
  title,
  image,
  type,
  icon,
  description,
  size
}: {
  title: string
  image: string
  type: string
  icon?: string
  description?: string
  size?: ContentCardSize
}) => {
  const { t } = useTranslation('common')

  const large = size === ContentCardSize.large

  return (
    <div className={styles.card}>
      <div
        className={cn(styles.card__header, { [styles.header__large]: large })}
      >
        <Image
          src={`/svg/${image}`}
          width={large ? 360 : 264}
          height={large ? 192 : 168}
        />
        <div className={styles.card__contentType}>
          <ContentType type={type} icon={icon} />
        </div>
      </div>
      <div
        className={cn(styles.card__footer, { [styles.footer__large]: large })}
      >
        <div className={styles.card__title}>
          <h4>{title}</h4>
        </div>
        {description ? (
          <div className={styles.card__description}>{description}</div>
        ) : null}
        <div className={styles.card__link}>
          {large ? t('get_started') : t('learn_more')}
        </div>
      </div>
    </div>
  )
}
