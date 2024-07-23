/* eslint-disable react-hooks/exhaustive-deps */
// import { Link } from "react-router-dom";
import sentinel from "../assets/sentinel.png";
import cvApp from "../assets/cv_application.png";
import danger from "../assets/danger-sign.png"
import { useState, useEffect, useRef } from "react";
import { AnimatedText } from ".";

const Projects = () => {

  const [tiltFrame1, setTiltFrame1] = useState(false);
  const [tiltFrame2, setTiltFrame2] = useState(false);
  const cvAppRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTiltFrame1(true);
            observer1.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTiltFrame2(true);
            observer2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sentinelRef.current) {
      observer1.observe(sentinelRef.current);
    }

    if (cvAppRef.current) {
      observer2.observe(cvAppRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer1.unobserve(sentinelRef.current);
      }
      if (cvAppRef.current) {
        observer2.unobserve(cvAppRef.current);
      }
    };
  }, []);


  return (
    <main className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto bg-white">
      <h3 className="font-bold md:text-5xl text-4xl flex justify-center relative text-black">Selected Projects <span className="absolute h-[6px] w-20 md:w-32 bg-slate-600 rounded-l-full rounded-r-full bottom-[-14px]"></span></h3>
      <div className="flex flex-col gap-20 mt-10">

        <div className="flex gap-8 flex-col md:flex-row ">
          <div className="grid flex-[.6] grow text-black">
            <AnimatedText text={"Sentinel"} customClassName="Outfit text-white font-bold text-xl mr-auto mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start"/>
            <p className="md:text-lg md:text-left">This application is designed for administrators within an organization. It enables staff members to input prompts into a model, which then generates price predictions for their products based on the provided information</p>
            <a href="https://ai.sentinelock.com/" className="flex items-center"><p className="md:text-base text-left text-xs font-bold ">More Detail</p> <img src={danger} alt="danger sign" className="h-5" /></a>
          </div>
          <div className="relative grow overflow-hidden min-w-[150px] md:max-w-[400px] md:left-16 left-7" ref={sentinelRef}>
            <div className="relative" style={{ paddingTop: '66.67%' }}>
              <img src={sentinel} alt="strategy" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${tiltFrame1 ? "rotate-[-5deg]" : ""} origin-top-right`} />
            </div>
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row ">
          <div className="relative grow overflow-hidden min-w-[150px] md:max-w-[400px] md:right-16 right-7 order-2 md:order-1" ref={cvAppRef}>
            <div className="relative" style={{ paddingTop: '66.67%' }}>
              <img src={cvApp} alt="strategy" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${tiltFrame2 ? "rotate-[5deg]" : ""} origin-top-left`} />
            </div>
          </div>
          <div className="flex-[.6] grid grow order-1 md:order-2 text-black">
            <AnimatedText text={"CV Application"} customClassName="Outfit text-white font-bold text-xl mr-auto mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start"/>
            <p className="md:text-lg md:text-left ">This user-friendly tool simplifies the process of creating professional resumes. With a sleek and intuitive interface, users can easily input their personal details, work experience, and education.</p>
            <a href="https://github.com/EmmanuelAjibokun/cv-application" className="flex items-center"><p className="md:text-base text-left text-xs font-bold ">More Detail</p> <img src={danger} alt="danger sign" className="h-5" /></a>
          </div>
        </div>

      </div>
    </main>
  )
}


export default Projects;