import SideNavbar from '@/layouts/SideNavbar/SideNavbar'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { Outlet } from 'react-router-dom'

function MainProfile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    return (
        <div className='w-full h-[88vh] scrollbar-hide  flex bg-gray-200 gap-0 sm:gap-8 '>
            <div className=''>
            <button className="sm:hidden absolute z-20 items-center sm:items-start sm:w-auto ml-2 mt-1" onClick={handleToggleMenu}>
                    {isMenuOpen ? (
                        <HiX className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    ) : (
                        <HiMenu className="text-[1rem] sm:text-[1.2rem] md:text-2xl" />
                    )}
                </button>
            {/* <SideNavbar className={`${isMenuOpen ? 'block' : 'hidden'}`}/> */}
            <SideNavbar res={isMenuOpen} />
            </div>
            <Outlet/>
        </div>
    )
}

export default MainProfile