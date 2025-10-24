import swimmerImg from "../assets/image 12.png";
import starLogo from "../assets/Star 1-2.png"
export default function Card() {
  return (
    <div className="justify-self-center">
      <div className="w-60">
        <button className="relative top-10 left-2  px-3 rounded-sm text-sm py-1 bg-white ">
          SOLD OUT
        </button>
        <img src={swimmerImg} />
      </div>
      <div className="mt-2">
        <div className="flex">
          <img className="align-middle" src={starLogo} />
          <p className="ml-2 text-center">5.0 (6) &#183; USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="font-bold">From $136</span> / person</p>
      </div>
    </div>
  )
}
