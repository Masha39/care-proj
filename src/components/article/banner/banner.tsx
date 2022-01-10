import { ContentType } from 'components/content-type/content-type'
import styles from './banner.module.scss'

export const Banner = ({
  title,
  type,
  icon
}: {
  title: string
  type: string
  icon?: string
}) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>{title}</h1>
      <div className={styles.banner__type}>
        <ContentType type={type} icon={icon} />
      </div>
    </div>
  )
}
