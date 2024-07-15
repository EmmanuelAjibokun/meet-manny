/* eslint-disable react/prop-types */


import { useEffect, useState, useRef } from "react";
import {Icons} from "./index"

const AnimatedText = ({text}) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setVisibleChars((prev) => {
                if (prev < text.length) {
                  return prev + 1;
                } else {
                  clearInterval(interval);
                  return prev;
                }
              });
            }, 100); // Adjust the delay as needed

            observer.unobserve(entry.target); // Stop observing once the animation starts
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
  }, [text]);

  return (
    <p ref={textRef} className="flex flex-wrap" >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block text-black w-auto  text-6xl font-bold transition-opacity duration-500 ease-out transform ${index < visibleChars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ display: 'inline-block' }}
        >
          {char + " "}
        </span>
      ))}
    </p>
  )

}

const Footer = () => {
  return (
    <footer className='bg-[rgb(228,243,255)] font-sans p-10 flex flex-col items-center gap-8'>
      {/* <p className="text-black w-auto  text-6xl font-bold">Want us to work <br />together?</p> */}
      <AnimatedText text="Want us to work together?" />
      <div className='flex flex-col items-center max-w-screen-2xl mx-auto gap-8'>
        <button className='bg-[#FF6B35] w-fit py-3 px-5 rounded-full '>Contact Me</button>
        <Icons/>
      </div>
    </footer>
  )
}

export default Footer;