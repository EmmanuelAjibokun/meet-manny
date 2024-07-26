import profileImage from "../assets/manny.jpg"
import {Icons} from ".";
import worker from "../assets/worker.png"
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return(
    <>
      <main className="relative px-10 md:px-20 py-10 flex gap-12 items-center md:flex-row flex-col text-black bg-[#E4F3FF] h-screen" style={{height: "calc(100vh - 106px)"}}>
        <ParticlesBackground/>
        <div className="shrink-[3] flex flex-col gap-4">
          <div>
            <p className="inline">Hello </p>
            <img src={worker} alt="worker icon" width={20} className="inline" />
          </div>
          <h1 className="font-bold md:text-5xl text-4xl">I&apos;m Emmanuel Ajibokun</h1>
          <p>I&apos;m a Frontend Developer based in Nigeria, dedicated to continual improvement of both my professional skills and personal growth. I specializing in building exceptional websites and making the web accessible to everyone.</p>
          <div>
            <button>View my resume <span>-</span></button>
          </div>
          <Icons/>
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