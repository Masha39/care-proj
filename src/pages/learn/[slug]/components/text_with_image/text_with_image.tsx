import Image from 'next/image'

import styles from './text_with_image.module.scss'

export const TextWithImage = ({
  content
}: {
  content: TextWIthImageData[]
}) => {
  return (
    <div className={styles.content}>
      {content.map((item, index) => (
        <div className={styles.content__item} key={index}>
          <div className={styles.content__image}>
            <Image src={`/images/${item.image}`} width={120} height={120} />
          </div>
          <p className={styles.content__text}>{item.text}</p>
        </div>
      ))}
    </div>
  )
}
