import React, { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { Carousel } from 'components/carousel/carousel'
import { ContentType } from 'components/content_type/content_type'
import Item1 from 'icons/slider/slide_1.svg'
import Item2 from 'icons/slider/slide_2.svg'

import { CustomPaging } from './components/custom-paging/custom-paging'
import styles from './main_page_carousel.module.scss'

const CustomNextArrow = ({
  className,
  style,
  onClick
}: {
  className?: string
  style?: object
  onClick?: () => {}
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        minWidth: '48px',
        minHeight: '48px',
        right: '-56px',
        border: '#9CBFCB 1px solid',
        borderRadius: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    />
  )
}

const CustomPrevArrow = ({
  className,
  style,
  onClick
}: {
  className?: string
  style?: object
  onClick?: () => {}
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        minWidth: '48px',
        minHeight: '48px',
        left: '-56px',
        border: '#9CBFCB 1px solid',
        borderRadius: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    />
  )
}

export const MainPageCarousel = () => {
  const { t } = useTranslation('main_page')

  const [items] = useState([
    {
      id: 1,
      href: '#',
      image: <Item1 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    },
    {
      id: 2,
      href: '#',
      image: <Item2 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    },
    {
      id: 3,
      href: '#',
      image: <Item1 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    },
    {
      id: 4,
      href: '#',
      image: <Item1 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    },
    {
      id: 5,
      href: '#',
      image: <Item1 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    },
    {
      id: 6,
      href: '#',
      image: <Item1 />,
      tagImage: '/icons/tool.svg',
      tagTitle: t('static/main_page:tagTitle'),
      textTitle: t('static/main_page:textTitle')
    }
  ])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0'
        }
      }
    ],
    customPaging: CustomPaging
  }

  return (
    <div className={styles.sliderWrapper}>
      <h3>{t('static/main_page:h2')}</h3>
      <p>{t('static/main_page:title')}</p>
      <Carousel customSettings={settings}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <Link href={item.href}>
              <a>
                <div className={styles.itemImage}>
                  {item.image}

                  <div className={styles.tag}>
                    <ContentType type={item.tagTitle} icon={item.tagImage} />
                  </div>
                </div>
                <div className={styles.itemText}>
                  <p>{item.textTitle}</p>
                  <span>{t('static/main_page:learn_more')}</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
