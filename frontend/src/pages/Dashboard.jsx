/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import AppBar from "../components/AppBar"
import Balance from "../components/Balance"
import Users from "../components/Users"

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    return <div className="bg-light-blue-to-white h-screen">
        <AppBar initial={name[0]}/>
        {/* <AppBar initial={initial}/> NOT WORKING ????????? */}
        <div className="m-8">
            <Balance />
            <Users name={name}/>
        </div>
    </div>
}
export default Dashboard
