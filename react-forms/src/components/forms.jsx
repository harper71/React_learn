import { useState } from "react"

export default function Form() {
  const [ formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

    console.log(formData);


  }
  return (
    <form className="flex fle">
      <input
        type="text"
        placeholder="first name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}

      />
      <input
        type="text"
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <textarea
        typeof="text"
        placeholder="comments"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <input
        type="checkbox"
        id="isFriendly"
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>
      <br />
    </form>
  )
}
