import React from 'react'
import laptopImage from '../assets/laptop.webp'
import logoImage from '../assets/newLogo.webp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Page3() {
    gsap.registerPlugin(ScrollTrigger)


    useGSAP(function(){
        gsap.to('.reactRoll', {
            rotate: 360,
            duration: 7,
            repeat: -1,
            ease: 'linear',
          });
    })

    useEffect(() => {
        // Continuous loop animation for scale
        gsap.to(".iconAnimation", {
            scale: 1.2,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            // stagger: 1,
        })
    }, []);


    return (
        <div id='page3Container'>

            <div className="leftIcons">

                <FontAwesomeIcon className='iconAnimation' icon={faHtml5} style={{ margin: '1px', fontSize: '74px', marginInline: '3px', color: '#333' }} />
                <FontAwesomeIcon className='iconAnimation' icon={faJs} style={{ margin: '1px', fontSize: '74px', color: '#F7DF1E', marginInline: '3px' }} />
                <FontAwesomeIcon className='iconAnimation reactRoll' icon={faReact} style={{ margin: '1px', fontSize: '74px', marginInline: '3px', color: '#333' }} />


            </div>

            <div className='container '>
                <img className='size-[35vw]' src={laptopImage} alt='' />
                <img className='h-[210px]' src={logoImage} alt='' />
            </div>


            <div className="rightIcons">
                <FontAwesomeIcon className='iconAnimation' icon={faCss3Alt} style={{ margin: '1px', fontSize: '74px', marginInline: '3px', color: '#333' }} />
                <FontAwesomeIcon className='iconAnimation' icon={faNodeJs} style={{ margin: '10px', fontSize: '70px', color: '#68A063', marginInline: '35px' }} />
                <FontAwesomeIcon className='iconAnimation' icon={faGithub} style={{ margin: '1px', fontSize: '74px', color: '#333', marginInline: '3px' }} />
            </div>


        </div>

    )
}

export default Page3