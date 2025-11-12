import HooksOne from "./components/apiCall"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BrowserWidth from "./components/windowTracker"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HooksOne/>}/>
          <Route path="/tracker" element={<BrowserWidth/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
