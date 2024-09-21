import { NavLink } from "react-router-dom"
function Account() {    
     const Text_color = "#fafafa"

    return (
        <>
            <h4 className={`text-[${Text_color}] text-[17px] sm:text-[19px] md:text-[20px] mb-3 font-inter font-semibold`}>Account</h4>
            <ul>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={'/useraccount'} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>My Account</NavLink> </li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={'/login'} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>Login</NavLink> /<NavLink to={'/signup'}target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>Register</NavLink></li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={'/usersPage'} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>Users</NavLink> </li>
                <li className="text-[13px] sm:text-[15px] md:text-[16px] my-2 text-[#fafafa]"><NavLink to={'/'} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`}>Home</NavLink></li>
            </ul>
        </>
    )
}
export default Account