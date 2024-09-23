import { getData, postData } from "@/services/apiCall";
import { useGetALLProfileUserdata, useGetProfileUserdata } from "@/services/zustandStore";
import React, { useEffect, useState } from "react";
import { BsDice4Fill } from "react-icons/bs";

function Connection() {
    const { alluserProfileData, setAllUserProfiledata } = useGetALLProfileUserdata((state) => state);
    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);
    const [connectionStatus, setConnectionStatus] = useState({}); // Track connection status for each user
  
    // Fetch data in useEffect when component mounts
    useEffect(() => {
        const fetchAllUserData = async () => {
            try {
                const userdataPromise = await getData("/user/profile/all_user_profile");
                if (userdataPromise?.data?.userProfiles) {
                    setAllUserProfiledata(userdataPromise.data.userProfiles);
                }
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            }
        };

        fetchAllUserData();
    }, [setAllUserProfiledata]);

    async function getSingleUserData(userID) {
        if (!userID) {
            console.error("User ID is required");
            return;
        }
        try {
            const response = await postData("/user/profile/find_user", { userId: userID });
            if (response?.data?.userProfile[0]) {
                const userProfile = response.data.userProfile[0];
                // Set the fetched user profile data to Zustand
                setUserProfiledata(userProfile);
            } else {
                console.log("No user profile found for the given user ID.");
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    
    async function addConnection(userID) {
        if (!userID) {
            console.error("User ID is required");
            return;
        }
        try {
            const response = await postData("/user/profile/add_connection", {userID});
            // setSuccess(response?.success)
            if (response?.success) {
                setConnectionStatus((prevState) => ({
                    ...prevState,
                    [userID]: true, // Mark the user as connected
                }));
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    async function deleteConnection(userID) {
        if (!userID) {
            console.error("User ID is required");
            return;
        }
        try {
            const response = await postData("/user/profile/delete_connection", {userID});
            if (response?.success) {
                setConnectionStatus((prevState) => ({
                    ...prevState,
                    [userID]: false, // Mark the user as not connected
                }));
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    return (
        <>
            <div className="w-[25rem] max-w-md mx-auto  bg-[#fffbfe]  min-h-[25rem] sm:h-[35rem] float-right  rounded-lg sm:rounded-3xl">
                <p className="text-md font-semibold sm:text-2xl ml-2 sm:ml-9 py-2 border-b-2">Connection</p>
                <div className="overflow-y-scroll overflow-x-hidden h-auto sm:h-[31.2rem] scrollbar-hide">
                    {alluserProfileData && alluserProfileData.length > 0 ? (
                        alluserProfileData.map((data, index) => (
                            <div key={index} className="h-[4rem] border-b-[1px] border-gray-200 sm:h-[5rem] w-[95%] sm:w-[20rem] m-auto flex items-center justify-between py-2 cursor-pointer">
                                <div onClick={() => { 
                                getSingleUserData(data?.userId);
                                 }}  className="flex gap-4">
                                    <div className="h-[2.5rem] sm:h-[3.5rem] w-[2.5rem] sm:w-[3.5rem] bg-green-100 rounded-full">
                                        <img
                                            src={
                                                Array.isArray(data?.userProfile[0]?.profileImg) && data?.userProfile[0]?.profileImg[0]
                                                    ? `data:${data?.userProfile[0]?.profileImg[0]?.contentType};base64,${data?.userProfile[0]?.profileImg[0]?.data}`
                                                    : "/default-profile.png"  // Fallback image if profile image is not available
                                            }
                                            alt={data?.userProfile[0]?.fullName || "Profile Image"}
                                            className="h-full w-full rounded-full"
                                        />
                                    </div>
                                    <div className="h-[3rem] w-[7rem]">
                                        <h1 className="text-[14px] sm:text-[16px] font-semibold">{data?.userProfile[0]?.fullName || "Unnamed"}</h1>
                                        <p className="text-[11px] sm:text-[13px]">{data?.userProfile[0]?.position || "No position available"}</p>
                                    </div>
                                </div>
                                {!connectionStatus[data?.userId] ? (
                                <button
                                    onClick={() => addConnection(data?.userId)}
                                    className="h-[1.7rem] sm:h-[2rem] w-[4rem] sm:w-[5rem] text-[12px] bg-[#55AD9B] rounded-sm sm:rounded-md"
                                >
                                    Join
                                </button>
                            ) : (
                                <button
                                    onClick={() => deleteConnection(data?.userId)}
                                    className="h-[2rem] w-[5rem] bg-[#ff8471] rounded-md"
                                >
                                    Disjoin
                                </button>
                            )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No connections found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Connection;
