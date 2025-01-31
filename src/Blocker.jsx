import React from 'react'

const Blocker = () => {
  return (
    <div className='absolute top-0 w-full h-screen bg-black/50 z-20 backdrop-blur-xl flex items-center justify-center'>
        <div className='bg-pink-100 w-[60%] h-[40%] rounded-md px-8 flex flex-col items-center justify-center gap-y-4'>
            <h1 className='font-sans text-2xl text-center'>I'm sorry baby, di pa siya available i-view, oki? Wait ka diyan sa February 14. I love youuuu so muchhhhh my babyyyy!</h1>
            <a className='bg-pink-400 text-white px-4 py-2 font-bold text-xl rounded-lg' href='https://www.youtube.com/watch?v=oMqIne65uHs'>Oki,,,</a>
        </div>
    </div>
  )
}

export default Blocker