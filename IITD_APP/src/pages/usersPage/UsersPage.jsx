import Connection from '@/components/UserConnection/Connection'
import ProjectTable from '@/components/UserProjectTable/UserProjectTable'
import UsersProfile from '@/components/UsersProfile/usersProfile'
import SideNavbar from '@/layouts/SideNavbar/SideNavbar'
import React from 'react'

function UsersPage() {
    return (
        <>
            <div className='w-full flex bg-gray-100 gap-8 '>
                <SideNavbar /> 
                <div className='h-[88vh] overflow-scroll flex gap-5 py-12 '>
                    <UsersProfile />
                    <Connection />
                </div>
            </div>
        </>
    )

}

export default UsersPage