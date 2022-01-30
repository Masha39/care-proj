import cn from 'classnames'
import { values } from 'lodash'

import AssessmentIcon from '../../../public/icons/assessment.svg'
import InformationIcon from '../../../public/icons/info.svg'
import ToolIcon from '../../../public/icons/tool.svg'
import VideoIcon from '../../../public/icons/videos.svg'
import styles from './content_type.module.scss'

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
  const getIcon = () => {
    if (icon === 'info') {
      return <InformationIcon />
    }
    if (icon === 'tool') {
      return <ToolIcon />
    }
    if (icon === 'videos') {
      return <VideoIcon />
    }
    if (icon === 'assessment') {
      return <AssessmentIcon />
    }
    return values
  }
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
        {getIcon()}
      </div>
      <div className={cn(styles.text, { [styles.text__active]: isActive })}>
        {type}
      </div>
    </div>
  )
}
