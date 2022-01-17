import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import { ContentType } from 'components/content-type/content-type'

import styles from './banner.module.scss'

export const Banner = ({
  title,
  type,
  icon,
  image,
  topic,
  url,
  readTime
}: {
  title: string
  type: string
  icon?: string
  image?: string
  topic: string
  url: string
  readTime: string
}) => {
  const { t } = useTranslation('article')

  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__breadcrumbs}>
          <Link href="/">
            <a className={styles.banner__link}>{t('static/article:home')}</a>
          </Link>
          /
          <Link href="/learn/">
            <a className={styles.banner__link}>{t('static/article:learn')}</a>
          </Link>
          /
          <Link href={`/learn/${url}`}>
            <a className={styles.banner__link}>{topic}</a>
          </Link>
        </div>
        <h1 className={styles.banner__title}>{title}</h1>
        <div className={styles.banner__info}>
          <ContentType type={type} icon={icon} />
          <div className={styles.banner__text}>{readTime}</div>
        </div>
      </div>
      <div className={styles.banner__image}>
        <Image src={`/images/${image}` || ''} width={360} height={240} />
      </div>
    </div>
  )
}
