import { Link } from "react-router-dom";
import icon from "../assets/bitmoji.jpg"

const Nav = () => {
  return (
    <nav className="flex mx-20 my-10 justify-between font-bold text-base">
      <div>
        <img src={icon} alt="manny's bitmoji" className="rounded-full w-14 border-2 border-[#a56526]"/></div>
      <ul className="flex gap-6 items-center ">
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors"><Link to="/" className="text-white">Home</Link></li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors"><Link to="/about" className="text-white">About me</Link></li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors"><Link to="/works" className="text-white">Works</Link></li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors"><Link to="/contact" className="text-white">Contact me</Link></li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors "><a href="" className="text-white">Resume</a></li>
        <div id="themeswitcher"></div>
      </ul>
    </nav>
  )
}

export default Nav;