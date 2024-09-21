import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuthStore, useGetCount } from "@/services/zustandStore/zustandStore";
import { FaCircleUser } from "react-icons/fa6";
import { useScrollToTop } from "@/services/hooks"
import { getData } from "@/services/apiCall"




const CustomNavLink = ({ to, children, onClick, isActiveLink }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `text-[12px] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] font-medium text-white relative after:content-[''] 
            after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] 
            ${isActive || isActiveLink ? 'after:block' : 'after:hidden'}`
        }
    >
        {children}
    </NavLink>
);

function Header() {
    useScrollToTop()
    const { count, setCount } = useGetCount((state) => state);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { removeToken, token } = useAuthStore((state) => state);
    const isLoggedIn = !!token;

    // useEffect(() => {
    //     (async () => {
    //         setCount(await (await getData("/user/products/cart_products_count"))?.data?.productCartsCount)
    //     })()
    // }, [setCount]);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="py-1 md:py-0 bg-cyan-950">
            <div className="flex h-[4rem] md:h-[5rem] lg:h-[6rem] justify-between sm:justify-around items-center">
                <div className="w-[35%] sm:w-[17%] flex justify-center">
                    <NavLink to="/" className="text-lg sm:text-2xl md:text-[1.5rem] lg:text-4xl font-bold text-white">
                        <div className=" text-[#0062FF] text-[25px] tracking-[0.5px]">
                            <span className=" text-[#124EB5] text-[25px]">WIZ</span>TIE
                        </div>
                    </NavLink>
                </div>
                <nav className="hidden md:flex justify-around w-[35%]">
                    <CustomNavLink to="/">Home</CustomNavLink>
                    <CustomNavLink to="/contact">Contact Us</CustomNavLink>
                    <CustomNavLink to="/usersPage">Users</CustomNavLink>
                    <CustomNavLink to="/chatwindow">ChatBot</CustomNavLink>
                    {isLoggedIn ? (
                        <NavLink
                            to="/"
                            onClick={() => removeToken()}
                            className="text-white"
                        >
                            Logout
                        </NavLink>
                    ) : (
                        <CustomNavLink to="/login">Login</CustomNavLink>
                    )}
                </nav>
                <div className="w-[60%] sm:w-[65%] md:w-[40%] flex justify-between items-center">
                    <div className="flex justify-evenly items-center bg-slate-200 h-6 sm:h-8 md:h-7 lg:h-9 w-[75%] sm:w-[70%] md:w-[70%] lg:w-[80%] rounded-full">
                        <CiSearch className="text-md sm:text-[1.5rem] text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for Product..."
                            className="h-[100%] w-[90%] px-1 rounded-full bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none"
                        />
                    </div>
                    <div className="w-[22%] sm:w-[15%] md:w-[20%] lg:w-[15%] flex justify-around sm:justify-between md:justify-between lg:justify-start lg:gap-3 items-center">

                        <NavLink to={"/useraccount"}>
                            <FaCircleUser className="text-sm sm:text-xl text-white" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex pl-1 sm:pl-2 gap-2 sm:gap-10 items-center">
                <button className="md:hidden items-center sm:items-start sm:w-auto text-white" onClick={handleToggleMenu}>
                    {isMenuOpen ? (
                        <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    ) : (
                        <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    )}
                </button>
                <div className={`w-[87%] sm:w-[80%] flex justify-around sm:justify-start sm:gap-7 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <CustomNavLink to="/">Shop</CustomNavLink>
                    <CustomNavLink to="/contact">Contact</CustomNavLink>
                    <CustomNavLink to="/usersPage">Users</CustomNavLink>
                    <CustomNavLink to="/chatwindow">ChatBot</CustomNavLink>
                    {isLoggedIn ? (
                        <CustomNavLink
                            to="/"
                            onClick={() => removeToken()}
                        >
                            Logout
                        </CustomNavLink>
                    ) : (
                        <CustomNavLink to="/login">Login</CustomNavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;





