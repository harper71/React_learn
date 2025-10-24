import phoneLogo from "../assets/phone-call-svgrepo-com.svg"
import emailLogo from "../assets/email-1572-svgrepo-com.svg"
export default function PropsExample(props) {
  return (
    <div className="w-62 p-3 m-2 rounded-md shadow-2xl ">
        <div className="w-fit">
            <img src={props.image}/>
            <h3 className="text-lg font-bold my-2">{props.name}</h3>
            <div className="flex gap-2">
                <img className="w-5" src={phoneLogo}/>
                <p>{props.phone}</p>
            </div>
            <div className="flex gap-2">
                <img className="w-5" src={emailLogo}/>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
  )
}
