import React from 'react'
import Jammming from '../assets/jammming.png'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Jammming,
            demo_href: 'http://thdxbe.surge.sh/',
            code_href: 'https://github.com/bbellducky/Jammming',
        },
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-white to-amber-50 w-full text-black md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline '>Portfolio</p>
                </div>
                {
                    portfolios.map(({id,src,demo_href,code_href}) => (
                        
                <div key={id} className='grid sm:grid-cols-2 md: grid-cols-2 gap-8 px-12 sm:px-0'>
                <div className='rounded-lg'>
                    <img src={src} alt="Project" className='rounded-lg'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo_href}>Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code_href}>Code</a></button>
                    </div>
                </div>

                
            </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Portfolio

