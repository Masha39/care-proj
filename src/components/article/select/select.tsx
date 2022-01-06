import React from 'react'
import Sel, { StylesConfig } from 'react-select'
import cn from 'classnames'
import styles from './select.module.scss'

export const Select = ({
  value,
  options,
  onChange,
  label,
  placeholder,
  defaultValue,
  className
}: {
  value: SelectOption
  options: SelectOption[]
  onChange: any
  label?: string
  placeholder?: string
  defaultValue?: SelectOption
  className?: string
}) => {
  const customStyles: StylesConfig = {
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected ? '#141C3E' : '#141C3E',
      background: '#ffffff',
      '&:active': {
        backgroundColor: '#F9F9FA'
      }
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      border: state.isFocused ? '1px solid #6DE88E' : '1px solid #cccccc',
      boxShadow: state.isFocused
        ? '0px 0px 10px -3px rgba(0, 187, 138, 0.39)'
        : 'none',
      '&:hover': {
        border: '1px solid #6DE88E',
        boxShadow: '0px 0px 10px -3px rgba(0, 187, 138, 0.39)'
      }
    })
  }

  return (
    <div className={cn(className)}>
      <label
        className={styles.select__label}
        id="aria-label"
        htmlFor="aria-example-input"
      >
        {label}
      </label>
      <Sel
        className="control"
        classNamePrefix="select"
        value={value}
        defaultValue={defaultValue}
        inputId="aria-example-input"
        instanceId="long-value-select"
        styles={customStyles}
        onChange={(e) => onChange(e)}
        options={options}
        placeholder={placeholder}
      />
    </div>
  )
}
