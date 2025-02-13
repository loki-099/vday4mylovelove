import React from 'react'

const Modal = ({ onClose }) => {
  return (
    <div className='top-0 absolute w-full h-screen overflow-y-hidden bg-black/75'>
        <img src="/close.png" className='w-16 h-16 absolute right-8 top-8' onClick={onClose}/>
        <div className='w-screen h-screen py-10 overflow-y-scroll'>
          <img src="/loveletter.jpg" alt="loveletter" className='w-[850px] mx-auto'/>
        </div>
    </div>
  )
}

export default Modal