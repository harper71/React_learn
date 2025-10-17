import ReactLogo from "../assets/react.svg"
function Header() {
  const Things = ["Pricing", "About", "Contact"];

  const ThingsElement = Things.map((items) => {
    return (
        <li>{items}</li>
    )
  })
  return (
    <nav className="flex place-items-center space-x-8">
      <img className="w-15 animate-spin " src={ReactLogo}/>
      <ul className="flex space-x-6">
        {ThingsElement}
      </ul>
    </nav>
  )
}

function Body() {
  return(
    <main>
      <h1 className=" text-4xl font-semibold">Reason to learn React</h1>
      <ol className="list-decimal list-inside pl-3">
          <li> Its a popular libary,so i,ll be able to get a job wioth it</li>
          <li>Its cool and hippy</li>
          <li>i'm more likely to get a job as a developer</li>
      </ol>
    </main>
  )
}
function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 w-full bg-black rounded-md text-white text-center py-4">
      <p>@ 2025 Prince Chimelem Azuka development. All rights reserved.</p>
    </footer>
  )
}
export default function Basic() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}
