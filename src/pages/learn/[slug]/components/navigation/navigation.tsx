import { useMemo, useState } from 'react'

import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from 'components/button/button'
import { ContentCard } from 'components/content_card/content_card'
import { ContentType } from 'components/content_type/content_type'

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
  previewText: string | undefined
  nextTopicArticles: ArticlePreview[]
  nextTopic: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('static/article')

  const router = useRouter()

  const descriptions = t<TopicDescription[]>(
    'static/learn:topics_description',
    { count: 1 },
    { returnObjects: true }
  )

  const description =
    descriptions.find((item) => item.topic === nextTopic)?.description || ''

  const nextArticles = useMemo(() => {
    if (!isOpen) {
      return nextTopicArticles.slice(0, 3)
    }
    return nextTopicArticles
  }, [isOpen, nextTopicArticles])

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
                  {previewText || null}
                </div>
                <div className={styles.nav__btn}>
                  <Button
                    title={t('read_next')}
                    buttonStyle="primary_blue"
                    onClick={() => router.push(`/learn/${nextArticle.url}`)}
                  />
                </div>
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
                {t('end')} {currentTopic}
              </div>
              <div className={styles.next__border} />
            </div>
            {nextTopic && (
              <>
                <div className={styles.next__wrapper}>
                  <div className={styles.next__next}>{t('next_topic')}</div>
                  <div className={styles.next__topic}>{nextTopic}</div>
                  <div className={styles.next__description}>{description}</div>
                  <div className={cn(styles.nav__button, styles.margin)}>
                    <Button
                      title={t('common:start')}
                      buttonStyle="primary_blue"
                      onClick={() =>
                        router.push(`/learn/${nextTopicArticles[0].url}`)
                      }
                    />
                  </div>
                </div>
                <div className={styles.next__articles}>
                  <div className={styles.next__row}>
                    {nextArticles.map((item, index) => {
                      return (
                        <Link href={`/learn/${item.url}`} key={index}>
                          <a className={styles.next__card}>
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
                  {!isOpen && nextTopicArticles.length > 3 ? (
                    <div
                      className={styles.next__showAll}
                      onClick={() => setIsOpen(true)}
                    >
                      {t('common:show_all')} {nextTopicArticles.length}{' '}
                      {t('common:resources')}
                    </div>
                  ) : null}
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
                  <div className={styles.nav__text}>{t('back')}</div>
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
                  <div className={styles.nav__text}>{t('explore_all')}</div>
                  <div className={styles.nav__link}>{t('learn')}</div>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </>
  )
}
