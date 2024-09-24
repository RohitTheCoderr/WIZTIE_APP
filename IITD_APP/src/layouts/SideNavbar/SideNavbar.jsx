import SideMenu from '@/components/sideMenu/SideMenu'
import SideProfile from '@/components/sideProfile/SideProfile'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SideNavbar({res}) {
    return (
        <div className={`w-[8rem] sm:w-[15rem] bg-[#fffbfe] h-auto sm:h-[100%] px-1 sm:px-3 pt-6 border-r z-10 absolute sm:relative  ${res ? 'block' : 'hidden'} sm:block`}>
            {/* <div className='text-3xl my-4 font-bold'>LOGO</div> */}
            <div className="flex gap-0 sm:gap-2 justify-evenly items-center border-2 bg-slate-50 lg:h-9 lg:w-[90%] m-auto rounded-md">
                <CiSearch className="m-0 sm:ml-1 text-md text-[1rem] sm:text-[1.5rem] text-gray-600" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[90%] sm:w-[85%] px-1 rounded-md bg-transparent text-[12px] sm:text-[14px] md:text-[14px] lg:text-sm outline-none"
                />
            </div>
            <div className='mx-0 sm:px-4 flex flex-col justify-between h-[88%] py-2 mt-2 sm:mt-6 '>
                <SideMenu />
                <SideProfile />
            </div>
        </div>
    )
}

export default SideNavbar


