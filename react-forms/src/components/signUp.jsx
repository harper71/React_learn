import { useState } from "react";

export default function SignUp() {
  const [Userdetails, setUserDetails] = useState({
    email: "",
    password: "",
    newsLetter: true
  });


  function handleChange(event) {
    const {name, type, checked, value} = event.target;
    setUserDetails((prevUserDetails) => {

      return {
        ...prevUserDetails,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Userdetails.confirmPassword === Userdetails.password) {
      alert("Successfully signed up");
      console.log("Successfully signed up");

    }
    if (Userdetails.newsLetter === true) {
      console.log("thanks for signing up for our newsletter");
    }
  }
  return (
    <div className="bg-white w-100 p-4 ">
      <form className="flex flex-col w-80 text-black ml-2 gap-3" onSubmit={handleSubmit}>
        <input
          className="border p-2 rounded-md"
          placeholder="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={Userdetails.email}
        />
        <input
          className="border p-2 rounded-md"
          placeholder="password"
          name="password"
          type="text"
          onChange={handleChange}
          value={Userdetails.password}
        />
        <input
          className="border p-2 rounded-md"
          placeholder="Comfirm password"
          name="confirmPassword"
          type="text"
          onChange={handleChange}
          value={Userdetails.confirmPassword}
        />
        <fieldset>
          <input
            type="checkbox"
            id="newsLetter"
            name="newsLetter"
            checked={Userdetails.newsLetter}
            onChange={handleChange}
          />
          <label className="ml-2">i want to join the newsletter</label>
        </fieldset>
        <button className="bg-purple-600 text-white">Sign up</button>
      </form>
    </div>
  )
}
