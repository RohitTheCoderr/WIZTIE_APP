import SideMenu from '@/components/sideMenu/SideMenu'
import SideProfile from '@/components/sideProfile/SideProfile'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SideNavbar() {



    
    return (
        <div className='w-[15rem] bg-[#fffbfe] h-[100%]  px-3 pt-6 border-r  '>
            {/* <div className='text-3xl my-4 font-bold'>LOGO</div> */}
            <div className="flex gap-2 justify-evenly items-center border-2 bg-slate-50 lg:h-9 lg:w-[90%] m-auto rounded-md">
                <CiSearch className="ml-1 text-md sm:text-[1.5rem] text-gray-500" />
                <input
                    type="text"
                    placeholder="Search"
                    className=" w-[85%] px-1 rounded-md bg-transparent text-[13px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none"
                />
            </div>
            <div className='px-4 flex flex-col justify-between  h-[88%] p-0 mt-6 '>
                <SideMenu />
                <SideProfile />
            </div>
        </div>
    )
}

export default SideNavbar