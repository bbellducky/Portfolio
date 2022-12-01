import React from 'react'
import aboutImg from '../assets/aboutImg.png'
const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <img src={aboutImg} alt="3dmodel" className='mx-auto w-1/4 md:w-3/4 px-4' />
                <div className='pb-2'>
                <br/>
                    <p className='text-4xl font-bold flex justify-center'>About Me
                    </p>
                </div>
                <p className="text-xl mt-4 text-justify"> Hello, my name is Bell. I am a Junior Software Developer with highly analytical and time management skills. I am extremely good at working under pressure. I always keep up trends, I can apply my technical knowledge and skills for continuous improvement. </p>
               </div>
        </div>
    )
}

export default About
