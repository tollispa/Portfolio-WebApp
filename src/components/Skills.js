import { FaReact, FaGitSquare,  FaHtml5, FaCss3Alt, FaDatabase,  FaJsSquare } from 'react-icons/fa';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';


function Skills() {
    const animationUp = "zoom-in-down"
    const animationDown = "zoom-in-up"

    useEffect(() => {
        AOS.init({duration: 4000, once: false})
      },[])
    return ( 
        <div id="skills"className="w-full h-[250px] bg-black text-white">
            <h1 className='pt-6 flex justify-center items-center text-4xl font-bold'>Skills and knowlegde</h1>
            <div className='flex py-3 gap-3 sm:gap-10 pt-10 justify-center items-center'>

            <FaReact data-aos={animationUp} size={70} className="bg-gradient-to-br from-blue-500 to-green-500 rounded hover:scale-110 transform transition duration-300" />
<FaGitSquare data-aos={animationDown} size={70} className="p-1 bg-gray-700 hover:scale-110 transform transition duration-300 rounded" />
<FaHtml5 data-aos={animationUp} size={70} className="p-1 bg-red-600 rounded hover:scale-110 transform transition duration-300" />
<FaCss3Alt data-aos={animationDown} size={70} className="p-1 bg-blue-600 rounded hover:scale-110 transform transition duration-300" />
<FaDatabase data-aos={animationUp} size={70} className="p-1 bg-blue-200 rounded hover:scale-110 transform transition duration-300" />

<FaJsSquare data-aos={animationDown} size={70} className="p-1 bg-gradient-to-br rounded from-yellow-400 to-orange-500" />

            </div>
            <p className='font-bold text-sm pt-10'>React, Git, HTML, CSS, SQL, Javascript</p>
        </div>
     );
}

export default Skills;