import github from "../assets/github.png"
import email from "../assets/communication.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Icons = () => {

  return (
    <div className="flex gap-4 max-w-48">
      <div>
        <a href="#">
          <img src={github} alt="github icon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={twitter} alt="twitter icon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={email} alt="mail icon" />
        </a>
      </div>
    </div>
  )
}

export default Icons;