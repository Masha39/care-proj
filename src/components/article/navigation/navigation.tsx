import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import { ContentType } from 'components/content-type/content-type'
import { ContentCard } from 'components/learn-page/content-card/content-card'

import styles from './navigation.module.scss'

export const Navigation = ({
  currentTopic,
  nextArticle,
  prevArticle,
  previewText,
  nextTopicArticles,
  nextTopic
}: {
  currentTopic: string
  nextArticle?: ArticlePreview
  prevArticle?: ArticlePreview
  previewText: string
  nextTopicArticles: ArticlePreview[]
  nextTopic: string
}) => {
  const { t } = useTranslation('article')

  const descriptions = t<TopicDescription[]>(
    'static/article:topics_description',
    { count: 1 },
    { returnObjects: true }
  )

  const description =
    descriptions.find((item) => item.topic === nextTopic)?.description || ''

  return (
    <>
      {nextArticle ? <div className={styles.border} /> : null}
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
                <button className={styles.nav__button}>
                  {t('static/article:read_next')}
                </button>
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
          <>
            <div className={styles.next}>
              <div className={styles.next__border} />
              <div className={styles.next__text}>
                {t('static/article:end')} {currentTopic}
              </div>
              <div className={styles.next__border} />
            </div>
            {nextTopic && (
              <>
                <div className={cn(styles.next__next, styles.centered)}>
                  {t('static/article:next_topic')}
                </div>
                <div className={cn(styles.next__topic, styles.centered)}>
                  {nextTopic}
                </div>
                <div className={styles.next__description}>{description}</div>
                <div className={styles.next__articles}>
                  <Link href={`/learn/${nextTopicArticles[0].url}`}>
                    <a className={styles.centered}>
                      <button className={cn(styles.nav__button, styles.margin)}>
                        {t('common:start')}
                      </button>
                    </a>
                  </Link>
                  {nextTopicArticles.map((item, index) => {
                    return (
                      <Link href={`/learn/${item.url}`} key={index}>
                        <a>
                          <ContentCard
                            title={item.title}
                            image={item.image}
                            type={item.content_type.label}
                            icon={item.content_type.icon}
                          />
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </>
            )}
          </>
        )}

        {prevArticle && nextTopic ? (
          <Link href={`/learn/${prevArticle.url}`}>
            <a>
              <div className={styles.nav__wrapper}>
                <div className={styles.nav__column}>
                  <div className={styles.nav__text}>
                    {t('static/article:back')}
                  </div>
                  <div className={styles.nav__link}>{prevArticle.title}</div>
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <Link href="/learn/">
            <a>
              <div className={styles.nav__wrapper}>
                <div className={styles.nav__column}>
                  <div className={styles.nav__text}>
                    {t('static/article:explore_all')}
                  </div>
                  <div className={styles.nav__link}>
                    {t('static/article:learn')}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </>
  )
}
