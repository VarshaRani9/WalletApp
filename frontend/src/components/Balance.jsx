/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"
import { BALANCE_URL } from "../../config"

const Balance = () => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            try {
              const token = localStorage.getItem("token");
              const response = await axios.get(BALANCE_URL, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              setData(response.data.balance)
              console.log(response.data.balance);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();

    }, [])

    return <div className=" flex">
        <div className="font-bold text-lg">
            Your balance : 
        </div>
        <div className="font-semibold ml-4 text-lg">
              {data ? (
        <div> ₹ {JSON.stringify(data, null, 2)}</div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    </div>
}
export default Balance