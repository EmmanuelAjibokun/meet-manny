import js from "../assets/js.png"
import html from "../assets/html-5.png"
import sass from "../assets/sass.png"
import python from "../assets/python.png"

const Skills = () => {
  return (
    <section className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto flex flex-col">
      <h3 className="font-bold md:text-5xl text-4xl flex justify-center relative text-black mb-10">Skills<span className="absolute h-[6px] w-10 md:w-16 bg-slate-600 rounded-l-full rounded-r-full bottom-[-10px]"></span></h3>

      <div className="flex justify-between md:flex-row flex-col ">
        <div>
          <div>
            <h5>Programming Languages</h5>
            <div id="languages" className="flex flex-wrap">
              <div id="language" className="flex items-center flex-nowrap">
                <img src={js} width={26} alt="Javascript" />
                <span>JavaScript</span>
              </div>
              <div id="language" className="flex items-center flex-nowrap">
                <img src={html} width={26} alt="Html" />
                <span>Html</span>
              </div>
              <div id="language" className="flex items-center flex-nowrap">
                <img src={sass} width={26} alt="Sass" />
                <span>Sass</span>
              </div>
              <div id="language" className="flex items-center flex-nowrap">
                <img src={python} width={26} alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>

          <div>
            <h5>Libraries and Frameworks</h5>
            <div id="languages" className="flex flex-wrap">
              <div id="language">
                <img src="" alt="React" />
                <span>React</span>
              </div>
              <div id="language">
                <img src="" alt="MaterialUI" />
                <span>MaterialUI</span>
              </div>
              <div id="language">
                <img src="" alt="Tailwind" />
                <span>Tailwind</span>
              </div>
              <div id="language">
                <img src="" alt="Formik" />
                <span>Formik</span>
              </div>
              <div id="language">
                <img src="" alt="Yup" />
                <span>Yup</span>
              </div>
            </div>
          </div>

          <div>
            <h5>Tools and Platforms</h5>
            <div id="languages" className="flex flex-wrap">
              <div id="language">
                <img src="" alt="Vercel" />
                <span>Vercel</span>
              </div>
              <div id="language">
                <img src="" alt="Github" />
                <span>GitHub</span>
              </div>
              <div id="language">
                <img src="" alt="Git" />
                <span>Git</span>
              </div>
              <div id="language">
                <img src="" alt="Photoshop" />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;