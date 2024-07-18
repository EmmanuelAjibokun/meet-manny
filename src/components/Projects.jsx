// import { Link } from "react-router-dom";
import sentinel from "../assets/sentinel.png";
import cvApp from "../assets/cv_application.png";
import { useState, useEffect, useRef } from "react";

const Projects = () => {

  const [tiltFrame, setTiltFrame] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTiltFrame(true)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);


  return (
    <main className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto">
      <h1>Selected Projects</h1>
      <div className="flex flex-col gap-20 mt-10">

        <div className="flex gap-[41px]">
          <div className="grid md:flex-[.7] flex-[.6] grow">
            <div className="mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start">Sentinel</div>
            <p className="md:text-lg md:text-left text-xs">Do you need an automated system specially built for your business processes? Say goodbye to the mundane and hello to efficiency and Let the magic of automation transform your business. Our meticulous team has got you covered. </p>
            <p className="md:text-base text-left text-xs">Reserve Your 15-Minute Slot Today</p>
          </div>
          <div className="relative grow overflow-hidden w-[150px] md:max-w-[400px] left-16">
            <div className="relative" style={{ paddingTop: '66.67%' }}>
              <img src={sentinel} alt="strategy" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${tiltFrame ? "rotate-[-5deg]" : ""} origin-top-right`} />
            </div>
          </div>
        </div>

        <div className="flex gap-[41px] items-center">
          <img src={cvApp} alt="strategy 2" className="md:flex-[.3] flex-[.4] w-[100px] md:w-[400px]" />
          <div className="md:flex-[.7] flex-[.6] grid">
            <div className="mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start">Early Access to Our Forthcoming Products</div>
            <p className="md:text-lg md:text-left text-xs">Be among the first to experience our cutting-edge automation products before official launch. Gain early access to innovative features by opting in to our exclusive pre-release program, collaborating directly with Tecohol community of automation enthusiasts.</p>
            <button className=' bg-[#010536] text-white px-[36px] py-[16px] mt-[25px] mb-[12px] text-base md:w-fit w-full'>Get Early Access </button>
          </div>
        </div>

        <div className="flex items-center gap-[41px]">
          <div className="grid md:flex-[.7] flex-[.6]">
            <div className="mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start">Let&apos;s Talk Strategy</div>
            <p className="md:text-lg md:text-left text-xs">Do you need an automated system specially built for your business processes? Say goodbye to the mundane and hello to efficiency and Let the magic of automation transform your business. Our meticulous team has got you covered. </p>
            <p className="md:text-base text-left text-xs">Reserve Your 15-Minute Slot Today</p>
          </div>
          <img src={""} alt="strategy" className="md:flex-[.3] flex-[.4] w-[150px] md:w-[400px]" />
        </div>
      </div>
    </main>
  )
}


export default Projects;