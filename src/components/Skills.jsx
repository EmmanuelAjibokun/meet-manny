

const Skills = () => {
  return (
    <section className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto flex flex-col">
      <h2 className="mx-auto">Skills</h2>

      <div className="flex justify-between">

        <div>
          <h3>Programming Languages</h3>
          <div id="languages" className="flex flex-wrap">
            <div id="language">
              <img src="" alt="Javascript" />
              <span>JavaScript</span>
            </div>
            <div id="language">
              <img src="" alt="Html" />
              <span>Html</span>
            </div>
            <div id="language">
              <img src="" alt="Sass" />
              <span>Sass</span>
            </div>
            <div id="language">
              <img src="" alt="Python" />
              <span>Python</span>
            </div>
          </div>
        </div>

        <div>
          <h3>Libraries and Frameworks</h3>
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
          <h3>Tools and Platforms</h3>
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
    </section>
  )
}

export default Skills;