import cn from 'classnames'
import Image from 'next/image'

import styles from './content-type.module.scss'

export const ContentType = ({
  type,
  icon,
  onClick,
  isClickable,
  isActive
}: {
  type: string
  icon?: string
  onClick?: () => void
  isClickable?: boolean
  isActive?: boolean
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.type, {
        [styles.type__clickable]: isClickable,
        [styles.type__active]: isActive,
        [styles.type__disabled]: !isClickable
      })}
    >
      <div className={cn(styles.icon, { [styles.icon__empty]: !icon })}>
        {icon ? <Image src={icon} width={30} height={30} /> : null}
      </div>
      <div className={cn(styles.text, { [styles.text__active]: isActive })}>
        {type}
      </div>
    </div>
  )
}
