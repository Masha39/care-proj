import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import { Section } from 'components/main_page/sections/components/section'

export type TypeSections = {
  title: string
  description: string
  btn: string
  img: {
    src: string
    width: string
    height: string
  }
}

export const Sections = () => {
  const { t } = useTranslation('sections')

  const sectionsData = t<TypeSections[]>(
    'sections:sections',
    { count: 1 },
    { returnObjects: true }
  )

  return (
    <div>
      {sectionsData.map((item, index) => (
        <Section
          item={item}
          isLeft={index % 2}
          isWhite={index % 2}
          key={index}
        />
      ))}
    </div>
  )
}
