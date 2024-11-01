import React, { useRef } from 'react'
import { CircleX, Mail, Linkedin, Phone, Download } from 'lucide-react';
import animePortfolio from '../assets/animePortfolio.webp'
import resume from '../assets/Resume_Frontend.pdf'

function Model({ onClose }) {


    const modelRef = useRef();

    const closeModel = (e) => {
        if(modelRef.current === e.target){
            onClose();
        }
    }

    return (
        <div ref={modelRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                {/* <button onClick={onClose} className='place-self-end'><CircleX size={25} /></button> */}
                <div className='bg-gray-200 rounded-xl px-20 py-10 flex gap-5 items-center mx-4'>

                    <img className='size-[380px]' src={animePortfolio} alt='' />

                    <div className='flex flex-col gap-7 font-[style2]'>

                        <button onClick={onClose} className='place-self-end text-gray-800'><CircleX size={35} /></button>

                        <span className='flex gap-4 text-xl text-gray-700'><Mail /> <a href='mailto:sairamkorkonda@gmail.com'>Email : sairamkorkonda@gmail.com</a></span>

                        <div className='flex gap-4 text-xl text-gray-700'><Linkedin /><a href='www.linkedin.com/in/sairam-korkonda-b7a897207'>sairam042</a></div>

                        <div className='flex gap-4 text-xl text-gray-700'><Phone />9380995067</div>

                        <a href={resume} download='Resume'><button onClick={onClose} className='bg-gray-500 px-4 py-3 rounded-2xl flex gap-3 w-[200px]'><Download />Download Resume</button></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model