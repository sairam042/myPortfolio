import React from 'react'

function TiltText(props) {
  return (
    <div id='tiltDiv' ref={props.tilt} className='mt-20'>
    <h1 className='text-[4.5vw] leading-[4vw] font-[style3] text-white'>I AM <span className='text-gray-400'>FRONTEND</span></h1>
    <h1 className='text-[8.5vw] leading-[8vw] font-[style3] text-white font-extrabold'>DEVELOPER</h1>
  </div>
  )
}

export default TiltText