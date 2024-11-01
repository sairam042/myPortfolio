import React from 'react'
import eCommerce from '../assets/deleveryBoy.webp'
import locationTracker from '../assets/locationTracker.webp'
import weatherApplication from '../assets/weatherApplication.webp'
import employeeManagment from '../assets/employeeManagment.webp'

function Page4() {

    return (
        <div className='bg-white h-screen px-6 py-5'>
            <div className='p-10 bg-black rounded-3xl h-full w-full shadow-xl shadow-grey-600'>

                <h1 className='text-[5.5vw] leading-[8vw] font-[style3] text-white font-extrabold text-center'>PROJECTS</h1>

                <div id='projectDisplay'>

                    <div className='projectCard'>
                        <img src={employeeManagment} alt='' />
                        <h3 className='text-l font-[style2] text-gray-400'>EMPLOYEE MANAGMENT SYSTEM</h3>
                        <button className='text-l font-[style2] text-gray-400 px-6 py-3 border-2 border-slate-700 mt-5 rounded-full hover:bg-grey-500'>Display Project</button>
                    </div>


                    <div className='projectCard'>
                        <img src={locationTracker} alt='' />
                        <h3 className='text-l font-[style2] text-gray-400'>LIVE LOCATION TRACKING</h3>
                        <button className='text-l font-[style2] text-gray-400 px-6 py-3 border-2 border-slate-700 mt-5 rounded-full hover:bg-grey-500'>Display Project</button>
                    </div>

                    <div className='projectCard'>
                        <img src={weatherApplication} alt='' />
                        <h3 className='text-l font-[style2] text-gray-400'>WEATHER APPLICATION</h3>
                        <button className='text-l font-[style2] text-gray-400 px-6 py-3 border-2 border-slate-700 mt-5 rounded-full hover:bg-grey-500'>Display Project</button>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Page4