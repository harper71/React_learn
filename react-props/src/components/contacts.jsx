import PropsExample from "./props_1";

export default function Contacts() {
  const Contacts = [
    {
      name: "Mr winskeson",
      image: "../../public/cat2.jpeg",
      phone: "(222) 455-345",
      email: "princeazuka99@gmail.com"
    },
    {
      name: "Mr meow",
      image: "../../public/cat3.jpeg",
      phone: "(222) 567-467",
      email: "prince99@gmail.com"
    },
    {
      name: "Mr hussky",
      image: "../../public/cat4.jpeg",
      phone: "(222) 455-345",
      email: "azuka2599@gmail.com"
    }
  ]
  const ContactsElements = Contacts.map((contact) => {
    return(
      <PropsExample
        image={contact.image}
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
      />
    )
  })
  return (
    <div className="flex">
      {ContactsElements}
    </div>
  )
}
