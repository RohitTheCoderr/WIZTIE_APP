import React from 'react'
import { MdOutlineGridView } from "react-icons/md";
import { CiSettings, CiFlag1 } from "react-icons/ci";
import { BsPlug, BsPlus } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { useGetShowmore } from '@/services/zustandStore';
import { rule } from 'postcss';
function SideMenu() {


    return (
        <div className='w-[100%]'>
            <div className='text-gray-800 font-semibold my-2 sm:my-4'>Menu</div>
            <div className=' w-[100%]'>
                <div className='flex gap-2 sm:gap-4  items-cente '>
                    <NavLink to={"/main_profile/Chat_with_Commections"} className={({ isActive }) => `pl-1 rounded-sm py-1 sm:py-2   flex w-full gap-1 sm:gap-4 items-center hover:text-[#55AD9B]  ${isActive ? 'text-[#55AD9B] bg-gray-800' : 'text-gray-600'}`}>
                        <div className='cursor-pointer' ><FaUser className='text-lg sm:text-xl md:text-2xl ' /></div>
                        <div className='text-[10px] sm:text-[15px]  cursor-pointer'>My Connections</div>
                    </NavLink>
                </div>
                <div className='flex gap-2 sm:gap-4  items-center  '>
                    <NavLink to={"/main_profile/edit_profile"} onClick={""} className={({ isActive }) => `pl-1 rounded-sm py-1 sm:py-2   flex  w-full gap-1 sm:gap-4 items-center hover:text-[#55AD9B]  ${isActive ? 'text-[#55AD9B] bg-gray-800' : 'text-gray-600'}`}>
                        <div className='cursor-pointer' ><FaEdit className='text-lg sm:text-xl md:text-2xl ' /></div>
                        <div className='text-[10px] sm:text-[15px] cursor-pointer'>Edit Profile</div>
                    </NavLink>
                    {/* < NavLink to={"/about"} target="#" className={({ isActive }) => ` relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.3px] sm:after:h-[1.5px] md:after:h-[2px] after:w-1/2 after:bg-[#db4444] pb-[0.18rem] ${isActive ? 'after:block' : 'after:hidden'}`><NavNavLink/> */}
                </div>
                <div className='flex gap-2 sm:gap-4 items-center text-gray-600 hover:text-[#55AD9B my-2 sm:my-4 '>
                    <NavLink to={"/updateAdd"} onClick={""} className={({ isActive }) => `pl-1 rounded-sm py-1 sm:py-2   flex  w-full gap-1 sm:gap-4 items-center hover:text-[#55AD9B]  ${isActive ? 'text-[#55AD9B] bg-gray-800' : 'text-gray-600'}`}>
                        <div className='cursor-pointer' ><CiSettings className='text-lg sm:text-xl md:text-3xl  ' /></div>
                        <div className='text-[10px] sm:text-[15px] cursor-pointer'>Update email/Phone</div>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default SideMenu