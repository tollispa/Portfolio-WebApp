import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Footer = () => {
    return (
       
<div className="h-[200px] text-[#00df9a] absolute"> 
<div className="p-4">
<p className="font-bold">This project is</p>
<p className="font-bold">Created with</p>
<p className="font-bold">React and Tailwind</p>
<p className="font-bold">By Tollis Papadopoulos</p>

<div className="flex mt-4 gap-4">
    <a href="https://www.linkedin.com/in/tollis-papadopoulos-512272244/">
<FaLinkedin style={{color: "#0077B5"}}size={40}/>

    </a>
    <a href="#">
<FaInstagram style={{color: "#E1306C"}}size={40}/>
</a>
<a href="https://github.com/tollispa">
<FaGithub 
style={{color: "grey"}}size={40}/>
</a> <Link
    to="home"
    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}
  >
    <FaArrowUp className="mr-8 text-white"size={40}/>
  </Link>

</div>

</div>



</div>
 
    )
}

export default Footer;