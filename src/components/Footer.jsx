import github from "../assets/github.png"
import email from "../assets/communication.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <footer className='bg-[rgb(228,243,255)] p-10 flex flex-col items-center'>
      <p className="text-black w-auto ">Want us to work <br />together?</p>
      <div className='  flex flex-col items-center font-[lora] max-w-screen-2xl mx-auto'>
          <button className='bg-[#FF6B35] w-fit mb-5 p-4 rounded-full'>Contact Me</button>
          <div className="flex gap-4">
            <div>
              <a href="#">
                <img src={github} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={email} alt="" />
              </a>
            </div>
          </div>

      </div>
    </footer>
  )
}

export default Footer;