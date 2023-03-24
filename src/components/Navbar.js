import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {useState} from "react"

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TOLLIS.</h1>
        <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-1200 bg-black ease-in-out duration-500" : "fixed left-[-100%]"}>
       
        <ul className=" uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">About me</li>

            <li className="p-4">Contact</li>

        </ul>
        </div>
        </div>
    )
}

export default Navbar