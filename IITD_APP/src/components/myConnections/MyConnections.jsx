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
            <div className="w-[25rem] max-w-md mx-auto bg-[#fffbfe] h-[35rem] float-right rounded-3xl">
                <p className="text-2xl ml-9 py-2">My Connections</p>
                <div className="overflow-y-scroll overflow-x-hidden h-[31.2rem] scrollbar-hide">
                    {myConnections && myConnections.length > 0 ? (
                        myConnections.map((data, index) => (
                            <div key={index} className="h-[5rem] w-[20rem] m-auto flex items-center justify-between py-2 cursor-pointer">
                                <div 
                                // onClick={() => {
                                // getSingleUserData(data?.userId);
                                //  }} 
                                  className="flex gap-4">
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
                                <button
                                    onClick={() => deleteConnection(data?.userId)}
                                    className="h-[2rem] w-[5rem] bg-[#ff8471] rounded-md"
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