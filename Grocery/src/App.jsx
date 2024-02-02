import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ErrorPage from "./pages/ErrorPage"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import ProductInfo from "./components/ProductInfo"
// import SignUp from "./pages/SignUp"

const App =()=> {
 
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/:id" element={<ProductInfo/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
