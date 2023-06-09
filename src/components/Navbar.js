import {AiOutlineClose, AiOutlineMenu,} from "react-icons/ai"
import { FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

import { Link } from 'react-scroll';

import {useState} from "react"

const Navbar = () => {
    
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Tollis Papadopoulos.</h1>
        <ul className="hidden md:flex uppercase">
            <li className="p-4 cursor-pointer hover:text-gray-300">
            <Link
                     to="skills"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                     offset={-80}
                     >
                    Skills
                    </Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-gray-300">
                    <Link
                     to="projects"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                     offset={-80}
                     >
                     Projects
                    </Link>
</li>
         <li className="p-4 cursor-pointer hover:text-gray-300">
               <a href="mailto:tollis.123@hotmail.com">Email</a>
         </li>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav ? "absolute left-0 top-0 w-[70%] h-[30%] border-r border-r-gray-1200 bg-black ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
       
        <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link
                     to="skills"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                     offset={-80}
                     >
                    Skills
                    </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link
                     to="projects"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                     offset={-80}
                     >
                     Projects
                    </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
            <a href="mailto:tollis.123@hotmail.com">Email</a>
            </li>
            <div className=" relative">
                <div className="absolute top-10 flex gap-2">
                <FaGithub size={40}/>
                <FaInstagram size={40}/>
                <FaLinkedin size={40}/>
                </div>
        
            </div>
            

          

        </ul>
        </div>
        </div>
    )
}

export default Navbar