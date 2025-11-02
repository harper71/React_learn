import { useState } from "react"

export default function Square(props) {
  const [on, setOn] = useState(props.on)
  const style = {
    backgroundColor: props.on ? "black": "white"
  }
  function flipOnClick() {
    setOn(prevOn => !prevOn)
  }
  return (
      <div onClick={() => props.toggle(props.id)} style={style} className="rounded-md border-1 border-black w-50 pb-40">
      </div>
    )
}
