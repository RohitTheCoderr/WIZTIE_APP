
import React from "react";
import ProjectTable from "../UserDataTable/UserTable";
import { FaLinkedin, FaInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { useGetProfileUserdata } from "@/services/zustandStore";
function UsersProfile() {


    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);

    const { fullName, PhoneNumber, aboutMsg, email, position, Address, profileImg, instagramProfileLink, lindinProfileLink } = userProfileData || {};
    return (
        <>
            <div className="h-[100%] w-[52rem]">
                <div className="h-auto">
                    <div className="relative m-auto w-[90%] bg-[#fffbfe] p-[2px] rounded-3xl h-[35rem] ">

                        <div className="h-[15rem] w-[90%] bg-[#95D2B3] mt-6 mx-auto rounded-3xl relative">
                            <div className="h-[7rem] w-[90%] bg-[#55AD9B] absolute rounded-3xl top-[100%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex justify-between item-center">
                                <div className="w-[95%] m-auto flex items-center justify-between ">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-orange-500 h-[5rem] w-[5rem] rounded-xl flex items-center justify-center">
                                            {/* <img src="" alt="Icon" className="h-full w-full object-cover" /> */}
                                            <img
                                                src={Array.isArray(profileImg) && profileImg[0]
                                                    ? `data:${profileImg[0]?.contentType};base64,${profileImg[0]?.data}`
                                                    : null}
                                                alt={fullName}
                                                className=' h-full w-full rounded-xl '
                                            />
                                        </div>
                                        <h1 className=" text-sm font-bold">{fullName}</h1>
                                    </div>

                                    <div className=" w-[10rem] flex justify-evenly items-center">
                                        <div className="flex items-center justify-center">
                                            <a href={`http://${lindinProfileLink}`} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin className="text-[#F1F8E8] text-[2rem]" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href={`http://${instagramProfileLink}`} target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className="text-[#F1F8E8] text-[2rem]" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href={`tel:+${PhoneNumber}`} className="ml-2">
                                                <FaSquareWhatsapp className="text-[#F1F8E8] text-[2rem]" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-[80%] m-auto mt-[5rem]">
                            <h1 className="text-2xl font-sm">About me</h1>
                            <p className="text-1xl font-sm">{aboutMsg}</p>
                        </div>
                    </div>
                </div>
                <div><ProjectTable /></div>
            </div>
        </>
    );
}

export default UsersProfile;

