import axios from "axios"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import { SIGNIN_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Signin = () => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate()
    return <div className="bg-gray-green-blue h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => {
          setUsername(e.target.value)
        }} placeholder="varsha@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => 
          setPassword(e.target.value)
        } placeholder="*****" label={"Password"} />
        <div className="pt-4">
        <Button onClick={async () => {
            const response = await axios.post(SIGNIN_URL, {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            // navigate("/dashboard", { state: { initial: username[0] } })
            navigate("/dashboard?name=" + username);
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
      </div>
    </div>
  </div>
}
export default Signin