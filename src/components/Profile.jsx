import profile from "../assets/IMG_8021.jpg"
import { AnimatedText } from "../pages/AboutMe";

const Profile = () => {
  return(
    <main className="flex gap-16 items-stretch md:flex-row flex-col justify-center mx-auto lg:max-w-[1000px] py-[75px] md:px-20 px-10 max-w-screen-2xl bg-white text-black">
      <div className="flex-grow md:basis-1/2 md:max-w-none md:flex-shrink max-w-80 ">
        <img src={profile} alt="profile picture" className="rounded-lg w-full h-full  object-cover" />
      </div>
      <div className="flex-grow md:basis-1/2 justify-center">
        <AnimatedText text={"Meet Manny"} customClassName={"inline font-bold text-3xl"}/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta eaque doloremque minima? Fugit ipsa placeat veritatis soluta repellendus necessitatibus molestias omnis ipsam asperiores maiores repudiandae, eos, voluptatem sed praesentium.
          Error eligendi hic eius deserunt quibusdam tempora quia ratione nulla, nesciunt nam! Asperiores velit odio cupiditate laudantium blanditiis totam reiciendis quisquam aliquam, est beatae facilis, a laborum amet pariatur delectus.
          Consequuntur, nulla aut? Aliquam quos ea eveniet cumque voluptas tempore in consequuntur! Voluptates aspernatur veritatis saepe. Expedita, ad! Commodi iusto doloribus repellat adipisci, ipsam eaque dolor eligendi explicabo illum impedit!
          Eligendi necessitatibus ullam error earum expedita hic ex illo explicabo! Soluta exercitationem fuga, ullam odio, maiores obcaecati velit voluptas corrupti, accusantium aperiam excepturi. Dolorum earum commodi quam odio a qui.
          Quisquam totam qui quaerat eaque in laborum molestiae nam pariatur, facere deleniti natus suscipit alias nulla error accusamus optio ullam esse. Ea repudiandae id voluptas doloribus doloremque facilis ratione corrupti?
        </p>
      </div>
    </main>
  )
}

export default Profile;