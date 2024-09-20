import React from 'react'
import { MdOutlineGridView } from "react-icons/md";
import { CiSettings, CiFlag1 } from "react-icons/ci";
import { BsPlug, BsPlus } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
function SideMenu() {
    return (
        <div className='w-[96%]  '>
            <div className='text-gray-800 font-semibold my-4'>Menu</div>
            <div>
                <div className='flex gap-4 items-center text-gray-400 hover:text-[#55AD9B]  my-4 '>
                    <Link to={"/useraccount/users"} className='flex gap-4 items-center'>
                        <div className='cursor-pointer' ><FaUser className='text-2xl ' /></div>
                        <div className='text-[15px] cursor-pointer'>Users</div>
                    </Link>
                </div>
                <div className='flex gap-4 items-center text-gray-400 hover:text-[#55AD9B]  my-4 '>
                    <Link to={"/useraccount/editprofile"} className='flex gap-4 items-center'>
                        <div className='cursor-pointer' ><FaEdit className='text-2xl ' /></div>
                        <div className='text-[15px] cursor-pointer'>Edit Profile</div>
                    </Link>
                </div>
                <div className='flex gap-4 items-center text-gray-400 hover:text-[#55AD9B] my-4 '>
                    <div className='cursor-pointer' ><CiSettings className='text-3xl b ' /></div>
                    <div className='text-[15px] cursor-pointer'>Setting</div>
                </div>

            </div>
        </div>
    )
}

export default SideMenu