import Form from "./components/forms"
<<<<<<< HEAD

=======
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from "./components/signUp"
>>>>>>> c7ac541 (commit all)

function App() {
  return (
    <>
<<<<<<< HEAD
    <Form/>
=======
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
>>>>>>> c7ac541 (commit all)
    </>
  )
}

export default App
