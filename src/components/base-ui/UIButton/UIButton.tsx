import React from 'react'
import IconAdd from 'components/base-ui/UIButton/img/plus_icon.svg'
import IconAddSmall from 'components/base-ui/UIButton/img/plus_icon_small.svg'
import styles from './UIButton.module.scss'

export const UIButton = (prop) => {
  const btnClasses = [
    styles.button,
    prop.size === 'big' ? styles.big_button : styles.small_button,
    prop.buttonStyle === 'primary_blue' ? styles.primary_blue : '',
    prop.buttonStyle === 'primary_orange' ? styles.primary_orange : '',
    prop.buttonStyle === 'secondary' ? styles.secondary : '',
    prop.buttonStyle === 'destructive' ? styles.destructive : '',
    prop.buttonStyle === 'tertiary' ? styles.tertiary : '',
    prop.buttonStyle === 'destructive_small' ? styles.destructive_small : '',
    prop.buttonStyle === 'add' ? styles.add : '',
    prop.buttonStyle === 'add_small' ? styles.add_small : ''
  ].join(' ')

  return (
    <button className={btnClasses}>
      {prop.buttonStyle === 'add' ? (
        <IconAdd width={18} height={18} className={styles.plus_icon} />
      ) : (
        ''
      )}
      {prop.buttonStyle === 'add_small' ? (
        <IconAddSmall
          width={14}
          height={14}
          className={styles.plus_icon_small}
        />
      ) : (
        ''
      )}
      Test
    </button>
  )
}
