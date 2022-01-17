import React, { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContentType } from 'components/content-type/content-type'
import Item1 from 'icons/slider/slide_1.svg'
import Item2 from 'icons/slider/slide_2.svg'

import styles from './carousel.module.scss'
import { CustomPaging } from './components/custom-paging/custom-paging'

export const Carousel = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      <Slider {...settings}>
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
      </Slider>
    </div>
  )
}
