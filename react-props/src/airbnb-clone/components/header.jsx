import airbnbLogo from "../assets/airbnb@logotyp.us.svg";

export default function Header() {
  return (
    <div className="rounded-md shadow-lg fixed top-0 left-0 w-full z-50 bg-white ">
      <img className="w-35" src={airbnbLogo}/>
    </div>
  )
}

