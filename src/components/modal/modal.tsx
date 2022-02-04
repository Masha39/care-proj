import React from 'react'

import ReactModal from 'react-modal'

ReactModal.setAppElement('body')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    height: '95vh',
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

export const Modal = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose: Function
  children: React.ReactNode
}) => {
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
