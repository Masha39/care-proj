import React, { useState } from 'react'

import { Carousel } from 'components/carousel/carousel'
import { Modal } from 'components/modal/modal'
import Close from 'public/icons/close.svg'

import styles from './tool_preview.module.scss'

export const ToolPreview = () => {
  const [isOpen, toggle] = useState(false)

  const settings = {
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: (i: number) => {
      return (
        <a>
          <img
            className={styles.paging}
            src={`/images/abstract0${i + 1}.png`}
            alt="mkfvk"
          />
        </a>
      )
    },
    dotsClass: 'dots',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <button onClick={() => toggle(true)}>Open</button>
      <Modal isOpen={isOpen} onClose={() => toggle(false)}>
        <div className={styles.preview__header}>
          <div className={styles.preview__wrapper}>
            <div className={styles.preview__text}>Preview text</div>
            <div className={styles.preview__title}>Title</div>
          </div>
          <div className={styles.preview__close}>
            <Close onClick={() => toggle(false)} />
          </div>
        </div>
        <div className={styles.preview__gallery}>
          <Carousel customSettings={settings}>
            <img src="/images/abstract01.png" alt="kmvj" />
            <img src="/images/abstract02.png" alt="kmvj" />
          </Carousel>
        </div>
      </Modal>
    </>
  )
}
