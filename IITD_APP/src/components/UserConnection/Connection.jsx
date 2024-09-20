import { getData, postData } from "@/services/apiCall";
import { useGetALLProfileUserdata, useGetProfileUserdata } from "@/services/zustandStore";
import React, { useEffect } from "react";
import { BsDice4Fill } from "react-icons/bs";

function Connection() {
    const { alluserProfileData, setAllUserProfiledata } = useGetALLProfileUserdata((state) => state);

    // Fetch data in useEffect when component mounts
    useEffect(() => {
        const fetchAllUserData = async () => {
            try {
                const userdataPromise = await getData("/user/profile/all_user_profile");
                if (userdataPromise?.data?.userProfiles) {
                    setAllUserProfiledata(userdataPromise.data.userProfiles);
                    console.log("all users", userdataPromise.data.userProfiles);

                }
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            }
        };

        fetchAllUserData();
    }, [setAllUserProfiledata]);

    //  find user

    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);

    async function getSingleUserData(userID) {
        if (!userID) {
            console.error("User ID is required");
            return;
        }

        console.log("Fetching data for user ID:", userID);

        try {
            const response = await postData("/user/profile/find_user", { userId: userID });
            console.log("my responce", response.data);

            if (response?.data?.userProfile[0]) {
                const userProfile = response.data.userProfile[0];
                console.log("User profile found:", userProfile);

                // Set the fetched user profile data to Zustand
                setUserProfiledata(userProfile);
            } else {
                console.log("No user profile found for the given user ID.");
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }


    // getSingleUserData(alluserProfileData?.userId)

    return (
        <>
            <div className="w-[25rem] bg-[#fffbfe] h-[35rem] float-right rounded-3xl">
                <p className="text-2xl ml-9 py-2">Connection</p>
                <div className="overflow-y-scroll overflow-x-hidden h-[31.2rem] scrollbar-hide">
                    {alluserProfileData && alluserProfileData.length > 0 ? (
                        alluserProfileData.map((data, index) => (
                            <div onClick={() => {
                                getSingleUserData(data?.userId); console.log("heloo", data?.userId);
                            }} key={index} className="h-[5rem] w-[20rem] m-auto flex items-center justify-between py-2 cursor-pointer">
                                <div className="flex gap-4">
                                    <div className="h-[3.5rem] w-[3.5rem] bg-green-100 rounded-full">
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
                                        <h1 className="text-[16px]">{data?.userProfile[0]?.fullName || "Unnamed"}</h1>
                                        <p className="text-[13px]">{data?.userProfile[0]?.position || "No position available"}</p>
                                    </div>
                                </div>
                                <button className="h-[2rem] w-[5rem] bg-[#55AD9B] rounded-md">Join</button>
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
