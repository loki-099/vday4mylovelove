import React from 'react'

const Modal = ({ onClose }) => {
  return (
    <div className='top-0 absolute w-full h-screen bg-black/75'>
        <img src="/close.png" className='w-16 h-16 absolute right-8 top-8' onClick={onClose}/>
        <div className=''>

        </div>
    </div>
  )
}

export default Modal