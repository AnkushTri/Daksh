import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ErrorPage from "./pages/ErrorPage"
import NavBar from "./components/NavBar"

const App =()=> {
 
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
