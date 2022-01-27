import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

import styles from './zone.module.scss'

export const Zone = ({
  label,
  content
}: {
  label: ZoneLabel
  content: string[]
}) => {
  const { t } = useTranslation('static/article')

  const green = label === 'green'
  const yellow = label === 'yellow'
  const red = label === 'red'

  return (
    <div className={styles.zone}>
      <div className={styles.zone__wrapper}>
        <div
          className={cn(styles.zone__header, {
            [styles.zone__green]: green,
            [styles.zone__yellow]: yellow,
            [styles.zone__red]: red
          })}
        >
          <div className={styles.zone__label}>
            {(green && t('green_zone')) ||
              (yellow && t('yellow_zone')) ||
              (red && t('red_zone'))}
          </div>
        </div>
        <ul className={styles.zone__list}>
          {content.map((item, index) => {
            return (
              <li className={styles.zone__item} key={index}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      <div
        className={cn(styles.badge, {
          [styles.badge__green]: green,
          [styles.badge__yellow]: yellow,
          [styles.badge__red]: red
        })}
      >
        <div>
          <div
            className={cn(styles.badge__header, {
              [styles.bcg__green]: green,
              [styles.bcg__yellow]: yellow,
              [styles.bcg__red]: red
            })}
          >
            {(green && 'All clear') ||
              (yellow && 'Warning Zone') ||
              (red && 'Emergency')}
          </div>
          <div className={styles.badge__text}>
            {(green && 'Continue activities as usual') ||
              (yellow && 'Call physician') ||
              (red && 'Call 911')}
          </div>
        </div>
      </div>
    </div>
  )
}
