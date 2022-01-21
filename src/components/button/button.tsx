import React from 'react'

import IconAdd from 'components/button/img/plus_icon.svg'
import IconAddSmall from 'components/button/img/plus_icon_small.svg'

import styles from './button.module.scss'

export interface ButtonProps {
  title: string
  size?: 'big'
  buttonStyle:
    | 'primary_blue'
    | 'primary_orange'
    | 'secondary'
    | 'destructive'
    | 'tertiary'
    | 'destructive_small'
    | 'add'
    | 'add_small'
    | 'icon'
    | 'icon_filled'
  onClick: () => void
}

export const Button = ({ title, size, buttonStyle, onClick }: ButtonProps) => {
  const btnClasses = [
    styles.button,
    size === 'big' ? styles.big_button : styles.small_button,
    buttonStyle === 'primary_blue' ? styles.primary_blue : '',
    buttonStyle === 'primary_orange' ? styles.primary_orange : '',
    buttonStyle === 'secondary' ? styles.secondary : '',
    buttonStyle === 'destructive' ? styles.destructive : '',
    buttonStyle === 'tertiary' ? styles.tertiary : '',
    buttonStyle === 'destructive_small' ? styles.destructive_small : '',
    buttonStyle === 'add' ? styles.add : '',
    buttonStyle === 'add_small' ? styles.add_small : '',
    buttonStyle === 'icon' ? styles.icon : '',
    buttonStyle === 'icon_filled' ? styles.icon_filled : ''
  ].join(' ')

  return (
    <button
      className={btnClasses}
      onClick={() => {
        onClick()
      }}
    >
      {buttonStyle === 'add' ? (
        <IconAdd width={18} height={18} className={styles.plus_icon} />
      ) : (
        ''
      )}
      {buttonStyle === 'add_small' ? (
        <IconAddSmall
          width={14}
          height={14}
          className={styles.plus_icon_small}
        />
      ) : (
        ''
      )}
      {title}
    </button>
  )
}
