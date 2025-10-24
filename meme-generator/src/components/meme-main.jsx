import PlaceHolderMeme from "../assets/face-expression-emotional-people-concept.jpg"
import MemeData from "./MemesApi.js";
export default function Meme() {

  function onClick() {
    const randomNum = Math.floor(Math.random() * MemeData.length);
    let imageUrl = MemeData[randomNum].url

    console.log('prince azuka');
    console.log(imageUrl);
  }

  return (
    <div className="flex flex-col justify-self-center w-150">
      <div className="flex justify-between mt-8">
        <input className="border shadow-lg pr-9 py-1 pl-2 border-neutral-300" placeholder="top text"/>
        <input className="border shadow-lg pr-9 py-1 pl-2 border-neutral-300" placeholder="bottom text"/>
      </div>
      <button onClick={onClick}
      className="bg-red-300 my-6 py-2 rounded-md bg-linear-to-r from-purple-800 to-purple-500 shadow-md p-3 items-center text-white">
        get a new meme image
      </button>
      <img className="w-fit mb-10" src={PlaceHolderMeme} />
    </div>
  )
}
