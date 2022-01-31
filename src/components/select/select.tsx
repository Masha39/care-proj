import React from 'react'

import Sel, { StylesConfig } from 'react-select'

import styles from './select.module.scss'

export const Select = ({
  value,
  options,
  onChange,
  label,
  placeholder,
  defaultValue
}: {
  value: SelectOption
  options: SelectOption[]
  onChange: any
  label?: string
  placeholder?: string
  defaultValue?: SelectOption
}) => {
  const customStyles: StylesConfig = {
    option: (provided) => ({
      ...provided,
      cursor: 'pointer',
      fontSize: '16px',
      color: '#1D526A',
      background: '#ffffff',
      wordBreak: 'break-word',
      '&:active': {
        backgroundColor: '#f6f8f9'
      },
      '&:hover': {
        backgroundColor: '#f6f8f9'
      }
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: '32px',
      width: '125px',
      height: '32px',
      cursor: 'pointer',
      background: '#f6f8f9',
      padding: '0 10px',
      border: state.isFocused
        ? '1px solid rgb(156, 191, 203)'
        : '1px solid #f6f8f9',
      boxShadow: state.isFocused
        ? '0px 0px 4px -3px rgba(29, 82, 106, 0.59)'
        : 'none',
      '&:hover': {
        border: '1px solid rgb(156, 191, 203)',
        boxShadow: '0px 0px 4px -3px rgba(29, 82, 106, 0.59)'
      }
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 2px'
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '16px',
      lineHeight: '21px',
      color: '#1D526A'
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px',
      padding: 'none'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: 'none',
      '&:active': {
        color: '#1D526A'
      },
      '&:hover': {
        color: '#1D526A'
      },
      color: state.isFocused ? 'rgba(29, 82, 106, 1)' : 'rgba(29, 82, 106, 0.8)'
    }),
    menu: (provided) => ({
      ...provided,
      border: '1px solid rgb(156, 191, 203)',
      boxShadow: '0px 0px 4px -3px rgba(29, 82, 106, 0.59)'
    })
  }

  return (
    <div className={styles.select}>
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
        instanceId="aria-example-input"
        styles={customStyles}
        onChange={(e) => onChange(e)}
        options={options}
        placeholder={placeholder}
      />
    </div>
  )
}
