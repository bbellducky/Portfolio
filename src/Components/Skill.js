import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
const Skill = () => {
    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
        },
        {
            id:2,
            src: css,
            title: 'CSS',
        },
        {
            id:3,
            src: js,
            title: 'JavaScript',
        },
        {
            id:4,
            src: node,
            title: 'Node.js',
        },  
        {
            id:5,
            src: react,
            title: 'React',
        },
        
    ]
    return (
        <div name="skill" className='bg-gradient-to-b from-white to-amber-50 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-3 inline'>
                        Skills
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id,src,title}) => (
                    <div key={id} className='hover:scale-105 duration-500 py-2 rounded-lg'>
                        <img src={src} alt="tech-stack" className='w-40 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
                    

                </div>
            </div>
        </div>
    )
}

export default Skill
