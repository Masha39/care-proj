import Image from 'next/image'
import Link from 'next/link'

import { ContentType } from 'components/content-type/content-type'

import styles from './navigation.module.scss'

export const Navigation = ({
  nextArticle,
  previousArticle,
  previewText
}: {
  nextArticle?: ArticlePreview
  previousArticle?: ArticlePreview
  previewText: string
}) => {
  return (
    <>
      <div className={styles.border} />
      <div className={styles.nav}>
        {nextArticle ? (
          <Link href={`/learn/${nextArticle.url}`}>
            <a className={styles.nav__wrapper}>
              <div className={styles.nav__column}>
                <div className={styles.nav__link}>{nextArticle.title}</div>
                <div className={styles.nav__text}>
                  <div className={styles.nav__gradient} />
                  {previewText}
                </div>
                <button className={styles.nav__button}>Read next</button>
              </div>
              <div className={styles.nav__image}>
                <Image
                  src={`/images/${nextArticle.image}`}
                  width={264}
                  height={168}
                />
                <div className={styles.nav__type}>
                  <ContentType
                    type={nextArticle.content_type.label}
                    icon={nextArticle.content_type.icon}
                  />
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <div>End of {previousArticle?.topic}</div>
        )}

        {previousArticle ? (
          <Link href={`/learn/${previousArticle.url}`}>
            <a>
              <div className={styles.nav__wrapper}>
                <div className={styles.nav__column}>
                  <div className={styles.nav__text}>
                    Go back to previous article:
                  </div>
                  <div className={styles.nav__link}>
                    {previousArticle.title}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <Link href="/learn/">
            <a>
              <div className={styles.nav__wrapper}>
                <div className={styles.nav__column}>
                  <div className={styles.nav__text}>Explore all topics in:</div>
                  <div className={styles.nav__link}>Learn</div>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </>
  )
}
