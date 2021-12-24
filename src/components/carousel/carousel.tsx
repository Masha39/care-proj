import React, { useState } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Item1 from 'icons/slider/slide_1.svg'
import Item2 from 'icons/slider/slide_2.svg'
import Tool from 'icons/tool.svg'
import styles from './carousel.module.scss'
import { CustomPaging } from './components/custom-paging/custom-paging'

export const Carousel = () => {
  const [items] = useState([
    {
      id: 1,
      href: '/learn/what-is-home-care',
      image: <Item1 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    },
    {
      id: 2,
      href: '#',
      image: <Item2 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    },
    {
      id: 3,
      href: '#',
      image: <Item1 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    },
    {
      id: 4,
      href: '#',
      image: <Item1 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    },
    {
      id: 5,
      href: '#',
      image: <Item1 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    },
    {
      id: 6,
      href: '#',
      image: <Item1 />,
      tagImage: <Tool />,
      tagTitle: 'Tool',
      textTitle: 'Who is your home care team?'
    }
  ])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <h3>Content Spotlight</h3>
      <p>Introduction to Home Care</p>
      <Slider {...settings}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <Link href={item.href}>
              <a>
                <div className={styles.itemImage}>
                  {item.image}

                  <div className={styles.tag}>
                    <div className={styles.tagLogo}>{item.tagImage}</div>
                    <span>{item.tagTitle}</span>
                  </div>
                </div>
                <div className={styles.itemText}>
                  <p>{item.textTitle}</p>
                  <span>Learn more</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}