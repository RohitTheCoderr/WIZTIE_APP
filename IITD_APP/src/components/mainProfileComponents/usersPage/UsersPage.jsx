import Connection from '@/components/UserConnection/Connection'
import UsersProfile from '@/components/UsersProfile/usersProfile'
import React from 'react'

function UsersPage() {
    return (
        <>
            {/* <div className='w-full flex bg-gray-100 gap-8 '> */}
                {/* <SideNavbar /> */}
                <div className=' overflow-scroll scrollbar-hide flex gap-5 px-2  pt-12 justify-center flex-wrap '>
                    <UsersProfile />
                    <Connection />
                </div>
            {/* </div> */}
        </>
    )
}

export default UsersPage