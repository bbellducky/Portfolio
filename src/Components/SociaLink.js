import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SociaLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <FaLinkedin size={30} />
            ),
            href: 'https://www.linkedin.com/in/thedxbe/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <FaGithub size={30} />
            ),
            href: 'https://github.com/bbellducky',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <HiOutlineMail size={30} />
            ),
            href: 'mailto:padarat.madlee@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <BsFillPersonLinesFill size={30} />
            ),
            href: './assets/cv_Padarat_Madlee.pdf' download,
            style: 'rounded-tr-md',
            download: true,
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] right-0 fixed'>
            <ul>
            {links.map(({id,child,href,style,download})=>(
                <li key={id}
                 className={'flex justify-between items-center w-40 h-14 px-4 mr-[-80px] duration-300'+''+ style}>
                 <a href={href} className='flex justify-between items-center w-full text-gray-400'
                download={download} target='_blank' rel="noreffer">{child}</a></li>
            ))}
                
            </ul>
        </div>
    )
}

export default SociaLink
