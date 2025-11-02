import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);

  function subOnClick() {
    setCount((pervCount) => {
      return (pervCount -= 1);
    });
  }
  function addOnClick() {
    setCount((pervCount) => {
      return (pervCount += 1);
    });
  }

  function addOnKeyDown() {
    setCount((pervCount) => {
      return (pervCount += 1);
    });
  }
  return (
    <div className="w-40 justify-self-center">
      <button
        onClick={subOnClick}
        className="relative p-1 rounded-full top-20 bg-neutral-600 w-7"
      >
        -
      </button>
      <div className=" w-20 p-7 rounded-full text-center bg-amber-200 ">
        {count}
      </div>
      <button
        onClick={addOnClick}
        onKeyDown={addOnKeyDown}
        className="rounded-full p-1 bottom-8 left-15 relative bg-neutral-600 w-7"
      >
        +
      </button>
    </div>
  );
}
