import Image from 'next/image'
import styles from './content-type.module.scss'

export const ContentType = ({
  type,
  icon,
  onClick
}: {
  type: string
  icon?: string
  onClick?: () => void
}) => {
  return (
    <div onClick={onClick} className={styles.type}>
      {icon ? (
        <Image src={icon} alt="Picture of the author" width={18} height={18} />
      ) : null}
      <div className={styles.type__text}>{type}</div>
    </div>
  )
}
