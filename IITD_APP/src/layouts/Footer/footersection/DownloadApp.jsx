import { FaInstagram, FaLinkedinIn,FaFacebookF } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import FooterQR from "@/assets/images/footerImages/footerQR.jpeg"
// import googleImg from "@/assets/images/footerImages/googleImg.png"
import googleIMG from "@/assets/images/footerImages/googleImg.png"



function Downloadapp() {
    
     const Text_color = "#fafafa"
    return (
        <>
            <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] font-inter mb-3 font-semibold`}>Download App</h4>
            <p className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Save $3 with App New User Only</p>
            
            <div className="w-[100%] h-[5.5rem] flex justify-between">
                <div className="w-[40%] my-auto "><img className="" src={FooterQR} alt="" /></div>
                {/* <div className="w-[55%] grid items-end  "> */}
                <div className=" w-[55%] flex items-end  ">
                    <img className="border-2 w-[6rem] h-[100%] " src={googleIMG} alt="" />
                    {/* <img className="w-[100%] border-2 " src="" alt="" /> */}
                   {/* <div className="w-[100%]  bg-slate-100 "> <img className="bg-red-300" src={googleplay} alt="" /></div> */}
                </div>
            </div>
            <div className="w-[100%] flex gap-4 my-4">
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaInstagram  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaLinkedinIn  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><FaFacebookF  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
                <div className="flex justify-center items-center w-[1.2rem] sm:w-[1.4rem] md:w-[1.7rem] h-[1.2rem] sm:h-[1.4rem] md:h-[1.7rem]"><LuTwitter  className="w-[0.8rem] sm:w-[1.1rem] md:w-[1.3rem] h-[0.8rem] sm:h-[1.1rem] md:h-[1.3rem] text-[#fafafa]"/></div>
            </div>
        </>
    )
}

export default Downloadapp