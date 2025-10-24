import PlaceImg from "../assets/Group 77.png";
export default function Body() {
  return (
    <div className="flex flex-col justify-self-center mt-30">
      <div>
        <img src={PlaceImg} />
      </div>
      <div className="w-150 mt-5">
        <h1 className="text-4xl font-bold mb-3">  Online Experiences</h1>
        <p className="text-2xl">
          join unique information activities led by
          one-of-a-kind hosts all without leaving home
        </p>
      </div>
    </div>
  )
}
