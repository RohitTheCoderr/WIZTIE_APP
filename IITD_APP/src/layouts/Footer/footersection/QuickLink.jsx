import { NavLink } from "react-router-dom"

function Quicklink() {

    const Text_color = "#fafafa"
    return (
        <>
            <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] mb-3 font-inter font-semibold`}>Quick Link</h4>
            <ul className="w-[100%]">
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Privacy Policy</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">Terms Of Use</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]">FAQ</li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={"/about"} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>About</NavLink></li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={"/contact"} target="#" className={({ isActive }) => `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>Contact</NavLink></li>
            </ul>
        </>
    )
}
export default Quicklink