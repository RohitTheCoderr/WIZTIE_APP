import { getData, postData } from '@/services/apiCall';
import { useGetMyConnections } from '@/services/hooks';
// import { useGetALLProfileUserdata } from '@/services/zustandStore';
import React, { useEffect } from 'react'

function MyConnections() {
    const {myConnections, fetchMyConnections}=useGetMyConnections()  // custom hooks

    useEffect(()=>{
        fetchMyConnections()
    },[])

    async function deleteConnection(userID) {
        if (!userID) {
            console.error("User ID is required");
            return;
        }
        try {
            const response = await postData("/user/profile/delete_connection", {userID});
            if (response?.success) {
                fetchMyConnections()
        }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    return (
        <>
            <div className="w-[25rem] max-w-md mx-auto bg-[#fffbfe] min-h-[25rem] sm:h-[35rem] float-right  rounded-lg sm:rounded-3xl">
                <p className="text-md font-semibold sm:text-2xl ml-2 sm:ml-9 py-2 border-b-2">My Connections</p>
                <div className="overflow-y-scroll overflow-x-hidden h-auto sm:h-[31.2rem] scrollbar-hide">
                    {myConnections && myConnections.length > 0 ? (
                        myConnections.map((data, index) => (
                            <div key={index} className="h-[4rem] border-b-[1px] border-gray-200 sm:h-[5rem] w-[95%] sm:w-[20rem] m-auto flex items-center justify-between py-2 cursor-pointer">
                                <div 
                                // onClick={() => {
                                // getSingleUserData(data?.userId);
                                //  }} 
                                  className="flex gap-4">
                                    <div className=" h-[2.5rem] sm:h-[3.5rem] w-[2.5rem] sm:w-[3.5rem] bg-green-100 rounded-full">
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
                                        <p className=" text-[11px] sm:text-[13px]">{data?.userProfile[0]?.position || "No position available"}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => deleteConnection(data?.userId)}
                                    className="h-[1.7rem] sm:h-[2rem] w-[4rem] sm:w-[5rem] text-[12px] text-sm bg-[#ff8471] rounded-sm sm:rounded-md"
                                >
                                    Disjoin
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No connections found.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default MyConnections