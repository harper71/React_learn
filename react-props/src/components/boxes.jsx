import { useState } from "react"
import boxes from "./box"
import Square from "./Square";

export default function Box() {
  const [ box, setBoxes ] = useState(boxes);

  function toggle(id) {
    setBoxes((prevBox) => {
      return prevBox.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })

  }
  const boxElements = box.map((value) => {
    return (
      <Square
        on={value.on}
        key={value.id}
        toggle={toggle}
        id={value.id}
      />
    )
  })
  return (
    <main className="grid grid-cols-3 gap-2 place-items-center mt-2">
      {boxElements}
    </main>
  )
}
