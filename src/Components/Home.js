import Landing from '../assets/Landing.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
    return (
        <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-600 text-gray-100'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full px-8'>
                    <h3 className='text-4xl sm:text-7xl font-bold'>I'm a  Junior Software Developer </h3>
                    <p className='py-4 mx-w-md text-gray-200'>I am a Junior Software Developer with highly analytical and time management skills. I am extremely good at working under pressure.    
                    I always keep up trends, I can apply my technical knowledge and skills for continuous improvement.</p>

                    <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfilio 
                        <span className='hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span> 
                    </button>
                    </div>
                </div>
                <img src={Landing} alt="3dmodel" className='mx-auto w-1/2 md:w-3/4 px-4' />

            </div>
        </div>
    )
}

export default Home
