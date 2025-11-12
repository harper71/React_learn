import { useState, useEffect } from "react";
import axios from "axios";
export default function HooksOne() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  async function fetchStarWars() {
    const URL = `https://swapi.dev/api/people/${count}`
    try {
      const response = await axios.get(URL)
      const data = response.data;
      setStarWarsData(data)

    } catch (error) {
      console.error('Error creating post:', error);
    }

  }

  console.log(starWarsData);

  useEffect(() => {
    fetchStarWars();
  }, [count])

  function onClick() {
    setCount((prevCount) => {
    return(prevCount += 1)
  })
  }
  return (
    <div>
      <hi>The count is {count}</hi>
      <button onClick={onClick}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
