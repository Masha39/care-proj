import cn from 'classnames'
import Image from 'next/image'

import { safeParse } from '~/utils/safe_parse'

import styles from './text_with_image.module.scss'

export const TextWithImage = ({
  content,
  background
}: {
  content: TextWithImageData[]
  background: boolean
}) => {
  return (
    <div className={styles.content}>
      {content.map((item, index) => (
        <div className={styles.content__item} key={index}>
          <div
            className={cn(styles.content__image, {
              [styles.content__background]: background
            })}
          >
            <Image src={`/svg/${item.image}`} width={120} height={120} />
          </div>
          <p className={styles.content__text}>{safeParse(item.text)}</p>
        </div>
      ))}
    </div>
  )
}
