import React from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = ({
  children,
  customSettings
}: {
  children: React.ReactNode[]
  customSettings?: object
}) => {
  const getSlidersToShow = () => {
    if (children.length >= 3) {
      return 3
    }
    if (children.length >= 2) {
      return 2
    }
    return 1
  }

  const settings = {
    speed: 500,
    arrows: true,
    arrowsClass: 'arrows',
    slidesToShow: getSlidersToShow(),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: getSlidersToShow().valueOf() > 2 ? 2 : 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...(customSettings ? { ...customSettings } : { ...settings })}>
      {children}
    </Slider>
  )
}
