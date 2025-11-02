import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./components/Items"
import IsImportant from "./components/statesIm";
import Count from "./components/count";
import ProfileCard from "./components/ProfileCard";
import Messages from "./components/message";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Items />}/>
          <Route path="/state1" element={<IsImportant/>}/>
          <Route path="/count" element={<Count/>}/>
          <Route path="/profile" element={<ProfileCard/>}/>
          <Route path="/messages" element={<Messages/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
