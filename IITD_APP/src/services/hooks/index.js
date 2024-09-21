import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { getData } from "@/services/apiCall";
import { useGettingMyConnectionsZustand } from '../zustandStore';

 const useFetchUserAddress = () => {
    const [userAddress, setUserAddress] = useState([]);

    useEffect(() => {
        fetchAddress();
    }, []);

    async function fetchAddress() {
        try {
            const fetchAdd = getData("/user/address/");
            const response = await fetchAdd;
            setUserAddress(response?.data?.addresses);
        } catch (error) {
            // toast.error(error?.response?.data?.message || "An error occurred.");
            console.log(error?.response?.data?.message || "An error occurred.");
        }
    }

    return { userAddress ,refetch: fetchAddress};
};


function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

//  for get my connections 

function useGetMyConnections() {

// const [myConnections, setMyConnections] = useState();
const { myConnections, setMyConnections } = useGettingMyConnectionsZustand((state) => state);


useEffect(() => {
       fetchMyConnections();
}, []);

const fetchMyConnections = async () => {
    try {
        const userdataPromise = await getData("/user/profile/get_connection");
        if (userdataPromise?.data?.connections) {
            setMyConnections(userdataPromise.data.connections);
        }
    } catch (error) {
        console.error('Error fetching user profile data:', error);
    }
};
return { myConnections , fetchMyConnections};
}

export { useOnlineStatus,useScrollToTop,useFetchUserAddress, useGetMyConnections};


