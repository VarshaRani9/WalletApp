import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { SIGNUP_URL } from "../../config"

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-gray-green-blue h-screen flex justify-center">
    <div className="flex items-center justify-center">
      <div className="rounded-lg bg-white w-85 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="Varsha" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Rani" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="varsha@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="*****" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post(SIGNUP_URL, {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            // navigate("/dashboard", { state: { initial: username[0] } }) ??????????? NOT WORKING
            navigate("/dashboard?name=" + username);
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
export default Signup