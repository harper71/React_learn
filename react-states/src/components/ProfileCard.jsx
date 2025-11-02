import { useState } from "react";
import profileLogo from "../assets/icons8-profile-48.png";
import starLogo from "../assets/single-star-svgrepo-com.svg";
import filledStarLogo from "../assets/star-filled-svgrepo-com (1).svg";

export default function ProfileCard() {
  const [ contact, setContact ] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "princesmail@gmail.com",
    isFavorite: false
  });
   function toggleFavorite() {
    setContact((prevContact) => {
      return ({...prevContact, isFavorite: true})
    })
   }

  return (
    <main>
      <article className="w-50 p-2 m-4 shadow-lg">
        <img src={profileLogo}  className="w-30 justify-self-center" />
        <div>
          <img onClick={toggleFavorite} className="w-6" src={contact.isFavorite ? filledStarLogo : starLogo}/>
          <h2 className="font-semibold pb-3">{contact.firstName} {contact.lastName}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
