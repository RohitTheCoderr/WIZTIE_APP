import ProjectTable from "../UserProjectTable/UserProjectTable";
import { FaLinkedin, FaInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { useGetProfileUserdata } from "@/services/zustandStore";
import UserMoreData from "../userMoreData/UserMoreData";

function UsersProfile() {
    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);

    const { fullName, PhoneNumber, aboutMsg, email, position, Address, profileImg, instagramProfileLink, lindinProfileLink } = userProfileData || {};
   
    return (
        <>
            <div className=" w-auto sm:w-[52rem] overflow-scroll scrollbar-hide">
                <div className="h-auto ">
                    <div className="relative m-auto w-auto sm:w-[90%] bg-[#fffbfe] p-[2px]  rounded-lg sm:rounded-3xl h-auto py-8 ">
                        <div className="h-[8rem]  sm:h-[12rem] w-[95%] sm:w-[90%] bg-[#95D2B3]  mx-auto rounded-lg sm:rounded-3xl relative">
                            <div className="h-[5rem] sm:h-[7rem] w-[95%] sm:w-[90%] bg-[#55AD9B] absolute rounded-lg sm:rounded-3xl top-[100%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex justify-between item-center">
                                <div className="w-[95%] m-auto flex items-center justify-between ">
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <div className="bg-orange-500 h-[4rem] sm:h-[5rem] w-[4rem] sm:w-[5rem] rounded-lg sm:rounded-xl flex items-center justify-center">
                                            <img
                                                src={Array.isArray(profileImg) && profileImg[0]
                                                    ? `data:${profileImg[0]?.contentType};base64,${profileImg[0]?.data}`
                                                    : null}
                                                alt={fullName}
                                                className=' h-full w-full object-cover rounded-lg sm:rounded-xl '
                                            />
                                        </div>
                                        <h1 className=" text-[13px] sm:text-sm font-bold">{fullName}</h1>
                                    </div>

                                    <div className="  w-[8rem] sm:w-[10rem] flex justify-evenly items-center">
                                        <div className="flex items-center justify-center">
                                            <a href={`http://${lindinProfileLink}`} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin className="text-[#F1F8E8] text-[1.5rem] sm:text-[2rem]" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href={`http://${instagramProfileLink}`} target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className="text-[#F1F8E8] text-[1.5rem] sm:text-[2rem]" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href={`tel:+${PhoneNumber}`} target="_blank" rel="noopener noreferrer">
                                                <FaSquareWhatsapp className="text-[#F1F8E8] text-[1.5rem] sm:text-[2rem]" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-[90%] sm:w-[80%] m-auto mt-14 sm:mt-[5rem]">
                            <h1 className=" text-xl sm:text-2xl font-sm font-inter">About me</h1>
                            <p className="text-[13px] sm:text-[1rem] font-sm">{aboutMsg}</p>
                        </div>
                        <div className='w-[90%] sm:w-[80%] m-auto'>
                            <details className="cursor-pointer">
                                <summary className="font-semibold  py-2  ">more Details</summary>
                                <UserMoreData data={userProfileData} />
                            </details>
                        </div>
                    </div>
                </div>
                <div><ProjectTable /></div>
            </div>
        </>
    );
}

export default UsersProfile;

