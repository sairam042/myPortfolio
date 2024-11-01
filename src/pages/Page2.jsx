import { useGSAP } from '@gsap/react'
import React from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Page2() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.from('.rotateText',{
            transform : 'rotateX(-80deg)',
            opacity:0,
            duration: 1,
            stagger:0.5,
            scrollTrigger:{
                trigger:'.rotateText',
                // markers:true,
                start:'top 60%',
                end:'top -140%',
                scrub:1
            }
        })
    })


    useGSAP(function(){
        gsap.to(".underLine", {
            width:'300px',
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.5,
          })
    })


    // useEffect(() => {
    //     // Continuous loop animation for scale
    //     gsap.to(".iconAnimation", {
    //       scale: 1.2,
    //       duration: 2,
    //       yoyo: true,
    //       repeat: -1,
    //       stagger: 0.5,
    //     })}, []);



  return (
    <div id='section2' className='bg-white text-center p-10'>
        <h3 className='text-gray-400 text-3xl'>Portfolio 2024 | designed and developed</h3>
        <div id='' className='rotateText mt-12'>
            <h1 className='text-[15vw] font-[style2] font-[1000] leading-[17vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[15vw] font-[style2] font-extrabold leading-[17vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[15vw] font-[style2] font-extrabold leading-[17vw]'>IS THE</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[15vw] font-[style2] font-extrabold leading-[17vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[15vw] font-[style2] font-extrabold leading-[17vw]'>THAT</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[15vw] font-[style2] font-extrabold leading-[17vw]'>WORKS!</h1>
        </div>


        {/* Icons div */}
        {/* <div className='flex items-center justify-center mt-[30px]'>
        <FontAwesomeIcon className='iconAnimation' icon={faHtml5} style={{ margin: '10px', fontSize: '70px', marginInline:'35px' , color: '#333'}} />
        <FontAwesomeIcon className='iconAnimation' icon={faCss3Alt} style={{ margin: '10px', fontSize: '70px', marginInline:'35px' , color: '#333'}} />
        <FontAwesomeIcon className='iconAnimation' icon={faJs} style={{ margin: '10px', fontSize: '70px', color: '#F7DF1E', marginInline:'35px' }} />
        <FontAwesomeIcon className='iconAnimation' icon={faReact} style={{ margin: '10px', fontSize: '70px', color: '#61DBFB', marginInline:'35px' }} />
        <FontAwesomeIcon className='iconAnimation' icon={faNodeJs} style={{ margin: '10px', fontSize: '70px', color: '#68A063', marginInline:'35px' }} />
        <FontAwesomeIcon className='iconAnimation' icon={faGithub} style={{ margin: '10px', fontSize: '70px', color: '#181717', marginInline:'35px' }} />
      </div> */}

      <div className='h-0.5 w-1/3 relative left-1/2 -translate-x-1/2 mt-[50px] bg-black underLine'>
      </div>


    </div>
    
  )
}

export default Page2