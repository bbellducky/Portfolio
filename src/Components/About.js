import React from 'react'
import aboutImg from '../assets/aboutImg.png'
const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <img src={aboutImg} alt="3dmodel" className='mx-auto w-1/2 md:w-3/4 px-4' />
                <div className='pb-2'>
                <br/>
                    <p className='text-4xl font-bold flex justify-center'>About Me
                    </p>
                </div>
                <p className="text-xl mt-4 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, debitis provident ut inventore tempore quia quasi blanditiis laborum, repudiandae consequuntur autem odit cumque ea voluptatibus nostrum alias nisi sed. Dignissimos.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, debitis provident ut inventore tempore quia quasi blanditiis laborum, repudiandae consequuntur autem odit cumque ea voluptatibus nostrum alias nisi sed. Dignissimos.</p>
            </div>
        </div>
    )
}

export default About
