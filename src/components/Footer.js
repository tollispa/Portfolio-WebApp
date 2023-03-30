import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
       
<div className="h-[200px] text-[#00df9a] absolute"> 
<div className="p-4">
<p className="font-bold">This project is</p>
<p className="font-bold">Created with</p>
<p className="font-bold">React and Tailwind</p>
<p className="font-bold">By Tollis Papadopoulos</p>

<div className="flex mt-4 gap-4">
<FaLinkedin style={{color: "#0077B5"}}size={40}/>
<FaInstagram style={{color: "#E1306C"}}size={40}/>
<FaGithub style={{color: "grey"}}size={40}/>
</div>

</div>



</div>
 
    )
}

export default Footer;