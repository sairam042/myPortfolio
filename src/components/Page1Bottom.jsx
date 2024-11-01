import React, { useEffect } from 'react'
import reactLogo from '../assets/react-logo.png'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

function Page1Bottom() {



    useEffect(() => {
        gsap.to('#banner img', {
          rotate: 360,
          duration: 3,
          repeat: -1,
          ease: 'linear',
        });
      }, []);


  return (
    <div className='absolute bottom-0 left-0 p-20 flex items-end justify-between w-full'>
        <div>
            <h2 className='text-2xl font-[style2] text-white'>BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className='text-xl font-[style2] text-gray-400'>BESPOKE FREELANCE</h3>
        </div>
        <div id='banner'>
            <img className='h-16' src={reactLogo} alt=''/>
        </div>
    </div>
  )
}

export default Page1Bottom