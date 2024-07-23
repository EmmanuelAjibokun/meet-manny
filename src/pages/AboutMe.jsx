import { Profile } from "../components";
import dev from "../assets/dev.png"

const AboutMe = () => {
  return (
    <div className="px-20 py-10">
      <section className="flex flex-col mt-40" style={{height: "calc(100vh - 106px)"}}>
        <div>
          <img src={dev} alt="multitasker icon" width={40} className="inline" />
          <p className="inline">About Emmanuel Ajibokun</p>
        </div>
        <h1 className="font-bold md:text-5xl text-4xl" >Frontend Engineer</h1>
        <p >I am a Frontend Engineer based in Akure, Nigeria</p>
      </section>
      
      <Profile/>
    </div>
  )
}

export default AboutMe;