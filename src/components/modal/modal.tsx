import React, { useEffect } from 'react'

import ReactModal from 'react-modal'

export const Modal = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose: Function
  children: React.ReactNode
}) => {
  useEffect(() => {
    ReactModal.setAppElement('body')
  })

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      height: '88vh',
      width: '85vw',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 3px 14px 1px rgba(7, 29, 37, 0.25)',
      borderRadius: '7px',
      border: 'none',
      padding: '32px'
    },
    overlay: {
      background: 'rgba(29, 86, 106, 0.4)',
      zIndex: '200'
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}
