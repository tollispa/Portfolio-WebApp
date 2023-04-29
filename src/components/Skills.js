import { FaReact, FaGitSquare,  FaHtml5, FaCss3Alt, FaDatabase,  FaJsSquare } from 'react-icons/fa';


function Skills() {
    return ( 
        <div id="skills"className="w-full h-[250px] bg-black text-white">
            <h1 className='pt-6 flex justify-center items-center text-4xl font-bold'>Skills and knowlegde</h1>
            <div className='flex py-3 gap-3 sm:gap-10 pt-10 justify-center items-center'>

            <FaReact size={70} className="bg-gradient-to-br from-blue-500 to-green-500 rounded hover:scale-110 transform transition duration-300" />
<FaGitSquare size={70} className="p-1 bg-gray-700 hover:scale-110 transform transition duration-300 rounded" />
<FaHtml5 size={70} className="p-1 bg-red-600 rounded hover:scale-110 transform transition duration-300" />
<FaCss3Alt size={70} className="p-1 bg-blue-600 rounded hover:scale-110 transform transition duration-300" />
<FaDatabase size={70} className="p-1 bg-blue-200 rounded hover:scale-110 transform transition duration-300" />

<FaJsSquare size={70} className="p-1 bg-gradient-to-br rounded from-yellow-400 to-orange-500" />

            </div>
            <p className='font-bold text-sm pt-10'>React, Git, HTML, CSS, SQL, Javascript</p>
        </div>
     );
}

export default Skills;