import { useState } from "react";

export default function Items() {
  const [things, setThings] = useState(["things 1", "things 2"]);

  function addOnClick() {
    const newThingsText = `thnings ${things.length + 1}`
    setThings((prevState) => {
      return ([...prevState, newThingsText])
    })
  }

  const thingsElement = things.map((value) => {
    return (
      <div>
        {value}
      </div>
    )
  })
  return (
    <div>
      <button onClick={addOnClick} className="border p-2 ">
        Add Item
      </button>
      {thingsElement}
    </div>
  )
}
