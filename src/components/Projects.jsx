/* eslint-disable react-hooks/exhaustive-deps */
// import { Link } from "react-router-dom";
import sentinel from "../assets/sentinel.png";
import cvApp from "../assets/cv_application.png";
import { useState, useEffect, useRef } from "react";
import { AnimatedText } from ".";

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
      <h3 className="font-bold md:text-5xl text-4xl flex justify-center relative">Selected Projects <span className="absolute h-[6px] w-20 md:w-32 bg-slate-600 rounded-l-full rounded-r-full bottom-[-14px]"></span></h3>
      <div className="flex flex-col gap-20 mt-10">

        <div className="flex gap-8 flex-col md:flex-row " ref={textRef}>
          <div className="grid flex-[.6] grow">
            <AnimatedText text={"Sentinel"} customClassName="Outfit font-bold text-xl mr-auto mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start"/>
            <p className="md:text-lg md:text-left text-xs">Do you need an automated system specially built for your business processes? Say goodbye to the mundane and hello to efficiency and Let the magic of automation transform your business. Our meticulous team has got you covered. </p>
            <p className="md:text-base text-left text-xs">Reserve Your 15-Minute Slot Today</p>
          </div>
          <div className="relative grow overflow-hidden min-w-[150px] md:max-w-[400px] md:left-16 left-7">
            <div className="relative" style={{ paddingTop: '66.67%' }}>
              <img src={sentinel} alt="strategy" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${tiltFrame ? "rotate-[-5deg]" : ""} origin-top-right`} />
            </div>
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row ">
          <div className="relative grow overflow-hidden min-w-[150px] md:max-w-[400px] md:right-16 right-7 order-2 md:order-1">
            <div className="relative" style={{ paddingTop: '66.67%' }}>
              <img src={cvApp} alt="strategy" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${tiltFrame ? "rotate-[5deg]" : ""} origin-top-left`} />
            </div>
          </div>
          <div className="flex-[.6] grid grow order-1 md:order-2">
            <AnimatedText text={"CV Application"} customClassName="Outfit font-bold text-xl mr-auto mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start"/>
            <p className="md:text-lg md:text-left text-xs">Be among the first to experience our cutting-edge automation products before official launch. Gain early access to innovative features by opting in to our exclusive pre-release program, collaborating directly with Tecohol community of automation enthusiasts.</p>
            <p className="md:text-base text-left text-xs">Reserve Your 15-Minute Slot Today</p>
          </div>
        </div>

      </div>
    </main>
  )
}


export default Projects;