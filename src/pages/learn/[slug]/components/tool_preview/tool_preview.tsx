import React, { useState } from 'react'

import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

import { Button } from 'components/button/button'
import { Modal } from 'components/modal/modal'
import ArrowLeft from 'icons/arrow_left.svg'
import ArrowRight from 'icons/arrow_right.svg'
import Close from 'public/icons/close.svg'
import FullScreen from 'public/icons/full_screen.svg'

import styles from './tool_preview.module.scss'

export const ToolPreview = ({
  images,
  title
}: {
  images: ImagesData[]
  title: string
}) => {
  const { t } = useTranslation('static/article')

  const [isOpen, toggle] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.gallery__button}>
          <Button
            title={t('view')}
            buttonStyle="primary_blue"
            onClick={() => toggle(true)}
          />
        </div>
        <div
          className={cn(styles.gallery__main, {
            [styles.gallery__full]: images.length === 1
          })}
        >
          <div className={styles.gallery__title}>
            <FullScreen />
            <h3>{title}</h3>
          </div>
          <img
            className={styles.gallery__img}
            src={`/images/${images[0].url}`}
            alt={images[0].description || title}
          />
        </div>
        {images.length >= 2 && (
          <div className={styles.gallery__images}>
            {images
              .map((img, index) => {
                return (
                  <div
                    className={cn(styles.gallery__item, {
                      [styles.gallery__one]: images.length === 2,
                      [styles.gallery__two]: images.length === 3,
                      [styles.gallery__three]: images.length >= 4
                    })}
                    key={index}
                  >
                    <img
                      src={`/images/${img.url}`}
                      alt={img.description || title}
                    />
                  </div>
                )
              })
              .slice(1, 4)}
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={() => toggle(false)}>
        <div className={styles.preview__header}>
          <div className={styles.preview__wrapper}>
            <div className={styles.preview__text}>{title}</div>
            <div className={styles.preview__title}>
              {images[currentImgIndex].description || ''}
            </div>
          </div>
          <div className={styles.preview__close}>
            <Close onClick={() => toggle(false)} />
          </div>
        </div>

        <div className={styles.preview__gallery}>
          <img
            className={styles.images__main}
            src={`/images/${images[currentImgIndex].url}`}
            alt={images[currentImgIndex].description || title}
          />

          {currentImgIndex > 0 && (
            <div
              className={cn(styles.arrow, styles.arrow__left)}
              onClick={() => {
                if (currentImgIndex > 0) setCurrentImgIndex(currentImgIndex - 1)
              }}
            >
              <ArrowLeft />
            </div>
          )}

          {currentImgIndex < images.length - 1 && (
            <div
              className={cn(styles.arrow, styles.arrow__right)}
              onClick={() => {
                if (currentImgIndex < images.length - 1)
                  setCurrentImgIndex(currentImgIndex + 1)
              }}
            >
              <ArrowRight />
            </div>
          )}

          <div className={styles.images__preview}>
            {images.length > 1 &&
              images.map((img, index) => {
                return (
                  <div
                    className={cn(styles.images__wrapper, {
                      [styles.images__active]: index === currentImgIndex
                    })}
                    onClick={() => setCurrentImgIndex(index)}
                    key={index}
                  >
                    <img
                      className={styles.images__item}
                      src={`/images/${img.url}`}
                      alt={img.description || title}
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </Modal>
    </>
  )
}
