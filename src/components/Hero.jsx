import profileImage from "../assets/manny.jpg"
// import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return(
    <>
      {/* <ParticlesBackground/> */}
      <main className="px-20 py-10 flex gap-12 items-center ">
        <div className="shrink-[3]">
          <p>Hello</p>
          <h1>I&apos;m Emmanuel Ajibokun</h1>
          <p>I&apos;m a Frontend Developer based in Nigeria, dedicated to continual improvement of both my professional skills and personal growth. I specializing in building exceptional websites and making the web accessible to everyone.</p>
          <div>
            <button>View my resume <span>-</span></button>
          </div>
          <div className="flex">
            <img src="" alt="github icon" width={"40px"} />
            <img src="" alt="instagram icon" width={"50px"} />
            <img src="" alt="twitter icon" width={"50px"} />
            <img src="" alt="linkedin icon" width={"50px"} />
          </div>
        </div>
        <div>
          <div className="flex inset-0 w-[250px] h-[250px] rounded-full border-8 border-[#a56526] border-opacity-65 pointer-events-none">
            <img src={profileImage} alt="manny's profile image" className="w-[250px] rounded-full border-4 border-[#a56526]" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero;