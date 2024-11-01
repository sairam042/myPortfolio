import React , {useState} from 'react'
import 'remixicon/fonts/remixicon.css'

function Header({setShowModel}) {
  return (
    <div className='fixed w-full z-10 py-24 px-20 flex items-center justify-end'>
        <button className='bg-black px-6 py-3 border-2 text-l rounded-full hover:bg-grey-500 text-white font-[style2]' onClick={()=>setShowModel(true)}>Hire Me</button>
        <i className="ri-more-2-fill text-2xl text-white ml-3"></i>
    </div>
  )
}

export default Header