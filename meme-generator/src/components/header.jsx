import TrollLogo from "../assets/Trollface.svg";

export default function Header() {
  return (
    <div className="flex justify-between bg-linear-to-r from-purple-900 to-purple-700 rounded-sm shadow-sm p-3 items-center text-white">
      <div className="w-12 flex gap-5 items-center">
        <img className="w-fit bg-white" src={TrollLogo} />
        <p>MemeGenerator</p>
      </div>
      <div>React Course - Project 3</div>
    </div>
  );
}
