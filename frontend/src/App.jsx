import {BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import SendMoney from "./pages/SendMoney"
const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
