

import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";
// import rrrrrr from "/@"
import { MdEmail } from "react-icons/md";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetUserdata } from "@/services/zustandStore";

function UserInfoCard() {
    
    const { userData } = useGetUserdata((state) => state);

    const { name, phoneNumber, email } = userData?.data || {};

    return (
        <>
            <div>
                <div className="h-[22rem] w-[25rem] border border-gray-500 bg-[#fffbfe] rounded-2xl">
                    <div className="h-[13rem] w-[15rem]  m-auto py-5 ">
                        <div className="h-[5rem] w-[5rem] rounded-full bg-pink-500 m-auto"><img src={""} alt="" /></div>
                        <h1 className="text-[15px] font-bold text-center pt-2 uppercase">{name}</h1>
                        <p className="text-[13px] text-center text-gray-400">Web Developer</p>
                        <div className="flex justify-center">
                            <div className=" h-[2rem] w-[14rem]  rounded text-center bg-gray-200 mt-4">
                                <div className="flex h-full justify-center ">
                                    <div className="flex justify-center items-center">
                                        <BsTelephoneFill className="text-[15px]  text-purple-500" />
                                        <span className=" text-purple-500 text-[15px] pl-3 font-medium">Call Carlie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[2rem] w-[15rem] flex jusctify-center items-center mt-2  m-auto">
                        <MdEmail className="text-[18px] text-purple-500" />
                        <span className="text-gray-400 text-[15px] pl-4">{email?email :"useremail@gmail.com"}</span>
                    </div>

                    <div className="h-[2rem] w-[15rem] flex jusctify-center items-center mt-2  m-auto">
                        <BsTelephoneFill className="text-[18px] text-purple-500 font-bold" />
                        <span className="text-gray-400 text-[15px] pl-4">{phoneNumber?phoneNumber:"+91-8372635414"}</span>
                    </div>

                    <div className="h-[2rem] w-[15rem] flex jusctify-center items-center mt-2  m-auto">
                        <FaLocationDot className="text-[18px] text-purple-500" />
                        <span className="text-gray-400 text-[15px] pl-4">Trarnoto, Colony 123</span>
                    </div>
                </div>
                <div className="border h-12 text-center py-2 rounded-2xl my-4">
                    <Link to={""}><div className="font-semibold text-lg uppercase">View Profile data</div></Link>
                </div>
            </div>

        </>
    )
}
export default UserInfoCard






