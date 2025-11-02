import { useState } from "react";

export default function IsImportant() {
  const [isOn, setOn] = useState(false);


  function changeOnClick() {
    setOn(true)
  }

  return (
    <div>
      <h1 className="text-4xl">
        Is state important to know?
      </h1>
      <div onClick={changeOnClick} className="text-2xl rounded-full bg-black text-white w-20 text-center p-6 cursor-pointer">
        {isOn ? "yes" : "No"}
      </div>
    </div>
  )
}
