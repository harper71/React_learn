import { useState } from "react"

export default function Form() {
  const [ formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
<<<<<<< HEAD
    comment: ""
  });
  function handleChange(event) {
    console.log(event.target.value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })

=======
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
>>>>>>> c7ac541 (commit all)
    console.log(formData);


  }
  return (
<<<<<<< HEAD
    <form className="flex fle">
      <input
=======
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ml-4">
      <input
        className="border-1"
>>>>>>> c7ac541 (commit all)
        type="text"
        placeholder="first name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}

      />
      <input
<<<<<<< HEAD
=======
        className="border-1"
>>>>>>> c7ac541 (commit all)
        type="text"
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
<<<<<<< HEAD
=======
        className="border-1"
>>>>>>> c7ac541 (commit all)
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
<<<<<<< HEAD
=======
        className="border-1"
>>>>>>> c7ac541 (commit all)
        typeof="text"
        placeholder="comments"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
<<<<<<< HEAD
      <input
        type="checkbox"
        id="isFriendly"
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>
      <br />
=======
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
>>>>>>> c7ac541 (commit all)
    </form>
  )
}
