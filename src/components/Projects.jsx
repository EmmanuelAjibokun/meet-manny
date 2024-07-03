import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main>
      <h1>Selected Projects</h1>
      <div className="flex flex-col gap-20 py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-[41px]">
          <div className="grid md:flex-[.7] flex-[.6]">
            <div className="mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start">Let&apos;s Talk Strategy</div>
            <p className="md:text-lg md:text-left text-xs">Do you need an automated system specially built for your business processes? Say goodbye to the mundane and hello to efficiency and Let the magic of automation transform your business. Our meticulous team has got you covered. </p>
            <Link to="/consult"><button className=' bg-[#010536] text-white px-[36px] py-[16px] mt-[25px] mb-[12px] text-base text-center md:w-fit  md:text-left'>Book a Meeting</button></Link>
            <p className="md:text-base text-left text-xs">Reserve Your 15-Minute Slot Today</p>
          </div>
          <img src={""} alt="strategy" className="md:flex-[.3] flex-[.4] w-[150px] md:w-[400px]" />
        </div>

        <div className="flex gap-[41px] items-center">
          <img src={""} alt="strategy 2" className="md:flex-[.3] flex-[.4] w-[100px] md:w-[400px]" />
          <div className="md:flex-[.7] flex-[.6] grid">
            <div className="mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start">Early Access to Our Forthcoming Products</div>
            <p className="md:text-lg md:text-left text-xs">Be among the first to experience our cutting-edge automation products before official launch. Gain early access to innovative features by opting in to our exclusive pre-release program, collaborating directly with Tecohol community of automation enthusiasts.</p>
            <button className=' bg-[#010536] text-white px-[36px] py-[16px] mt-[25px] mb-[12px] text-base md:w-fit w-full'>Get Early Access </button>
          </div>

        </div>
      </div>
    </main>
  )
}


export default Projects;