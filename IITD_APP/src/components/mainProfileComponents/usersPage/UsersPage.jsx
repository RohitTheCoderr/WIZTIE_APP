import Connection from '@/components/UserConnection/Connection'
import UsersProfile from '@/components/UsersProfile/usersProfile'
import { useAuthStore } from '@/services/zustandStore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UsersPage() {
    const isLoggedin = useAuthStore((state) => state.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedin) {
            navigate("/login");
        } 
    }, [isLoggedin, navigate]);

    return (
        <>
            {/* <div className='w-full flex bg-gray-100 gap-8 '> */}
                {/* <SideNavbar /> */}
                <div className=' overflow-scroll scrollbar-hide flex flex-wrap  px-2  pt-12  '>
                    <UsersProfile />
                    <Connection />
                </div>
            {/* </div> */}
        </>
    )
}

export default UsersPage