import InfoIcon from 'icons/info.svg'
import styles from './banner.module.scss'

export const Banner = ({
  title,
  contentType
}: {
  title: string
  contentType: string
}) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>{title}</h1>
      <div className={styles.banner__type}>
        <InfoIcon />
        <div className={styles.banner__typeText}>{contentType}</div>
      </div>
    </div>
  )
}
