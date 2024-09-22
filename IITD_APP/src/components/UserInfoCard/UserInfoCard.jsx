import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetShowmore, useGetUserdata } from "@/services/zustandStore";
import UserMoreData from "../userMoreData/UserMoreData";

function UserInfoCard({ profile }) {

    // const { userData } = useGetUserdata((state) => state);

    // const { name, phoneNumber, email } = userData?.data || {};
    const { fullName, PhoneNumber, email, position, Address, profileImg ,city} = profile || {};

    return (
        <>
            <div className=" max-w-md mx-auto ">
                    <div className="h-[22rem] w-[25rem] border border-gray-500 bg-[#fffbfe] rounded-2xl">
                        <div className="h-[13rem] w-[15rem]  m-auto py-5 ">
                            <div className="h-[5rem] w-[5rem] rounded-full m-auto">
                                <img
                                    src={Array.isArray(profileImg) && profileImg[0]
                                        ? `data:${profileImg[0]?.contentType};base64,${profileImg[0]?.data}`
                                        : null}
                                    alt={fullName}
                                    className=' h-full w-full rounded-full'
                                />

                            </div>
                            <h1 className="text-[15px] font-bold text-center pt-2 uppercase">{fullName}</h1>
                            <p className="text-[13px] text-center text-gray-400">{position}</p>
                            <div className="flex justify-center">
                                <div className=" h-[2rem] w-[14rem]  rounded text-center bg-[#ddfff8] mt-4">
                                    <div className="flex h-full justify-center ">
                                        <div className="flex justify-center items-center">
                                            <BsTelephoneFill className="text-[15px]  text-[#55AD9B]" />
                                            <span className=" text-[#55AD9B] text-[15px] pl-3 font-medium">Call {fullName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[2rem] w-[16rem] flex  items-center mt-2  m-auto ">
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                                <MdEmail className="text-[18px] text-[#55AD9B]" />
                                <span className="text-gray-400 text-[15px] pl-4">{email ? email : "useremail@gmail.com"}</span>
                            </a>
                        </div>

                        <div className="h-[2rem] w-[16rem] flex  items-center mt-2  m-auto ">
                            <BsTelephoneFill className="text-[18px] text-[#55AD9B] font-bold" />
                            <span className="text-gray-400 text-[15px] pl-4">{PhoneNumber}</span>
                        </div>

                        <div className="h-[2rem] w-[16rem] flex items-center mt-2  m-auto ">
                            <FaLocationDot className="text-[18px] text-[#55AD9B]" />
                            <span className="text-gray-400 text-[15px] pl-4">{Address}, {city}</span>
                        </div>
                    </div>
                    <div className="border h-12 text-center py-2 rounded-2xl bg-[#fffbfe] my-4">
                        <Link to={""}><div className="font-semibold text-lg uppercase">View Profile data</div></Link>
                    </div>
               
            </div>

        </>
    )
}
export default UserInfoCard






