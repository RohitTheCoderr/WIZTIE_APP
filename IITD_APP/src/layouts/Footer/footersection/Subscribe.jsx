import { IoMdSend } from "react-icons/io";
import Logo from './logo'
import SendEmail from './SendEmail'

function Subscribe() {
     const Text_color = "#fafafa"

    return(
        <>
          <Logo />
          <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] mb-3 font-inter font-semibold`}>Subscribe</h4>
          <p className={`text-[${Text_color}] text-[13px] sm:text-[15px] md:text-[16px] my-2 font-four`}>Get 10% off your first order</p>
          <div className={`bg-transparent border-2 flex justify-between items-center w-[11rem] sm:w-[12rem] md:w-[13rem] px-1  h-[1.6rem] sm:h-[1.8rem] md:h-[2rem] rounded-[5px]   `}> <SendEmail /> <span><IoMdSend className={`w-[1.3rem] h-[1.3rem] cursor-pointer text-[#fafafa]`} /></span></div>
        </>
    )
}
export default Subscribe;