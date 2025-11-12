import { useEffect } from "react"
import { useState } from "react"

export default function BrowserWidth() {
  const [show, setShow ] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  function onClick() {
    setShow(!show)
  }
  // when ysing use effect always clean up the useEffect to avoid memeory licks
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log('resized');
      setWindowWidth(window.innerWidth)


    })
    return () => {
      window.removeEventListener("resize", () => {
        console.log("cleaning up");
        
        setWindowWidth(window.innerWidth)
      })
    }
  }, [])
  return (
    <div>
      <button className="px-5 py-2" onClick={onClick}>
        Toggle windowTracker
      </button>
      <h1 className="text-2x1">Window width: {show ? window.innerWidth : ""}</h1>
    </div>
  )
}
