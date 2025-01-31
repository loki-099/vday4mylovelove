import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import Blocker from "./Blocker";

function App() {

  const [isClick, setIsClick] = useState(false)

  return (
    <div className="w-full h-screen bg-[url('/background.jpg')] bg-cover relative overflow-y-hidden">
      <Blocker/>
      <div className="flex flex-col h-full items-center">
        <h1 className="text-[80px] font-bold text-white text-center leading-none pt-28">
          Happy Valentine’s Day to my love,<br></br>my lovelove, my everything, my baby.
        </h1>
        <img src="/shadow.png" alt="letter" className="absolute -bottom-64 opacity-75"/>
        <img src="/letter.png" alt="letter" className="absolute -bottom-52 animate-float" onClick={() => setIsClick(true)}/>
        <span className="absolute animate-float left-44 bottom-16"><img src="/cat1.png" alt="cat" className="hover:scale-110 ease-in-out transition-all"/></span>
        <span className="absolute animate-float right-8 top-52"><img src="/cat2.png" alt="cat" className="hover:scale-110 ease-in-out transition-all"/></span>
        <span className="absolute animate-float left-10 top-52"><img src="/cat3.png" alt="cat" className="hover:scale-110 ease-in-out transition-all"/></span>
        <span className="absolute animate-float right-20 bottom-16"><img src="/cat4.png" alt="cat" className="hover:scale-110 ease-in-out transition-all"/></span>
        <h2 className="absolute bottom-60 animate-float text-2xl text-white border-pink-400 bg-rose-500 p-2 left-96" onClick={() => setIsClick(true)}>Read Me!</h2>
      </div>

      { isClick && createPortal(
        <Modal onClose={() => setIsClick(false)}/>, document.body
      )}
    </div>
  )
}

export default App
