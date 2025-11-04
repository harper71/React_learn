import { useState } from "react"

export default function Form() {
  const [ formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }


  // function handleClick(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       isFriendly: !formData.isFriendly
  //     }
  //   })
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);


  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ml-4">
      <input
        className="border-1"
        type="text"
        placeholder="first name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}

      />
      <input
        className="border-1"
        type="text"
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        className="border-1"
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        className="border-1"
        typeof="text"
        placeholder="comments"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <div>
          <input
            className="cursor-pointer mr-2"
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
        <label htmlFor="isFriendly">Are you Friendly?</label>
        <br />
      </div>
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="pary-time"
          name="employment"
        />
        <label htmlFor="part-time">Part-time</label>
      </fieldset>
      <br/>
      <button>Sumbmit</button>
    </form>
  )
}
