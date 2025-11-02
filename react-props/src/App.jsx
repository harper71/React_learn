import Main from "./airbnb-clone/components/main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts";
import Box from "./components/boxes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/box" element={<Box/>}/>
      </Routes>
    </Router>
  )
}

export default App
