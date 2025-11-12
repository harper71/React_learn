import { useState, useEffect } from "react";
import PlaceHolderMeme from "../assets/face-expression-emotional-people-concept.jpg"
import MemeData from "./MemesApi.js";
import axios from "axios";

export default function Meme() {
  const [memeData, setMemeData] = useState({});
  const [ meme, setMeme ] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });

  async function FeatchMemeData() {
    const url = "https://api.imgflip.com/get_memes";
    try {
      const response = await axios.get(url);
      const data = response.data.data
      console.log(data);
      setMemeData(data);

    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    FeatchMemeData();
    console.log(memeData);
  }, [])

  function onClick() {
    const randomNum = Math.floor(Math.random() * memeData.memes.length);
    const memeArray = memeData.memes
    setMeme((prevMeme) => {
      return({
        ...prevMeme,
        randomImage: memeArray[randomNum].url
      })
    })
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
  return (
    <div className="flex flex-col justify-self-center w-150">
      <div className="flex justify-between mt-8">
        <input
          className="border shadow-lg pr-9 py-1 pl-2 border-neutral-300"
          name="topText"
          placeholder="top text"
          type="text"
          value={meme.topText}
          onChange={handleChange}

        />
        <input
          className="border shadow-lg pr-9 py-1 pl-2 border-neutral-300"
          placeholder="bottom text"
          name="bottomText"
          type="text"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button onClick={onClick}
      className="bg-red-300 cursor-pointer my-6 py-2 rounded-md bg-linear-to-r from-purple-800 to-purple-500 shadow-md p-3 items-center text-white">
        get a new meme image
      </button>
      <div className="p-0 m-0 w-full float absolute-left h-fit">
        <p className="text-3xl w-50 relative top-20 left-1/2 bottom-0 text-white text-center">{meme.topText}</p>
        <img className="w-fit mb-10" src={meme.randomImage} />
        <p className="w-50 left-1/2 text-3xl relative bottom-30 text-white text-center">{meme.bottomText}</p>
      </div>

    </div>
  )
}
