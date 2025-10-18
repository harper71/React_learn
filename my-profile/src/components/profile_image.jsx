import ProfileImage from "../assets/profile_image.png"
import facebookLoge from "../assets/facebook-svgrepo-com.svg"
import githubLogo from "../assets/github-142-svgrepo-com.svg"
import linkedInLogo from "../assets/linkedin-svgrepo-com.svg"
import emailLogo from "../assets/email-1572-svgrepo-com.svg"
import XLogo from "../assets/X_logo_2023.svg"

function ProfileInfo() {
  return (
    <div className="flex-col justify-items-center inline-block">
      <img className="w-fit" src={ProfileImage} />
      <div className="text-center mt-3">
        <p className="text-3xl text-blue-200">Prince Azuka</p>
        <p>Fullstack Developer</p>
        <p>prince-in-tech.website</p>
      </div>
      <div className="flex ">
        <button className="flex mr-3 cursor-pointer bg-neutral-100 text-black px-3 rounded-sm">
          <img className="w-4" src={emailLogo}/>
          <p className="pl-2">Email</p>
        </button>
        <button className="flex cursor-pointer bg-blue-500 text-white px-3 rounded-sm">
          <img className="w-4" src={linkedInLogo} />
          <p className="pl-2">LinkedIn</p>
        </button>
      </div>
    </div>
  )
}

function Info() {
  return (
    <div className="w-60 text-sm text-justify ml-4">
      <h1 className="text-2xl mb-2">About</h1>
      <p className="">
        I’m a Full-Stack Developer skilled in React,
        Express.js, Python, JavaScript, Nginx, Shell, and C,
        with expertise in both front-end and backend development.
        I build clean, scalable applications and design efficient
        SQL and NoSQL data models. I thrive on fine-tuning systems,
        creating RESTful APIs,and delivering seamless user experiences
        with a balance of precision and creativity.
      </p>
      <h1 className="text-2xl mt-4">Interests</h1>
      <p>
        Building interactive web applications with modern frameworks and tools.
        System optimization and backend architecture design.
        Database modeling and performance tuning.
        Learning how things work under the hood to write cleaner, faster code.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex justify-center py-3 bg-neutral-500">
      <a  href="https://x.com/princeazuka99" className="cursor-pointer mr-3">
        <img className="w-8" src={XLogo} />
        </a>
      <a href="https://github.com/harper71" className="cursor-pointer mr-3">
        <img className="w-8" src={githubLogo}/>
      </a>
      <img className="w-8" src={facebookLoge} />

    </div>
  )
}

export default function Profile() {
  return (
    <div className="w-63 rounded-2xl justify-self-center">
      <ProfileInfo/>
      <Info/>
      <Footer/>
    </div>
  )
}
