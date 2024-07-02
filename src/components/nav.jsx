import icon from "../assets/bitmoji.jpg"

const Nav = () => {
  return (
    <nav className="flex mx-20 my-10 justify-between font-bold text-base">
      <div>
        <img src={icon} alt="manny's bitmoji" className="rounded-full w-12"/></div>
      <ul className="flex gap-6 items-center ">
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors">Home</li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors">About me</li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors">Works</li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors">Contact me</li>
        <li className="hover:text-blue-600 hover:cursor-pointer transition-colors">Resume</li>
        <div id="themeswitcher"></div>
      </ul>
    </nav>
  )
}

export default Nav;