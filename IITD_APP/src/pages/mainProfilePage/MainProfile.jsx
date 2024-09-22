import SideNavbar from '@/layouts/SideNavbar/SideNavbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainProfile() {
    return (
        <div className='w-full h-[88vh] overflow-scroll scrollbar-hide flex   bg-black gap-8 '>
            <SideNavbar />
            <Outlet/>
        </div>
    )
}

export default MainProfile