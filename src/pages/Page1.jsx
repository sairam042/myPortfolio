import React, { useEffect, useRef, useState } from 'react'
import logoImage from '../assets/newLogo.webp'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
function Page1() {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMove = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/70)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }


  return (
    <div onMouseMove={(e) => {
      mouseMove(e)
    }} className='bg-white h-screen px-6 py-5'>

      <div id='page1-in' className='relative p-10 bg-black rounded-3xl h-full w-full shadow-xl shadow-grey-600'>
        <img className='h-20 ' src={logoImage} alt='' />

        <TiltText tilt={tiltRef}/>

        <Page1Bottom />
        
      </div>
    </div>
  )
}

export default Page1