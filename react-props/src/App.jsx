import Main from "./airbnb-clone/components/main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropsExample from "./components/props_1";
import Contacts from "./components/contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
  )
}

export default App
