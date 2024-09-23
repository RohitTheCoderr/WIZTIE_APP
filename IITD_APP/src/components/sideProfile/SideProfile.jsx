import React from 'react'
import { Button } from '../form'
import { NavLink } from 'react-router-dom'
import { useAuthStore, useGetProfileUserdata, useGetUserdata } from '@/services/zustandStore';

function SideProfile() {

    const { removeToken, token } = useAuthStore((state) => state);
    const isLoggedIn = !!token;
    const { userData } = useGetUserdata((state) => state);

    const { name, phoneNumber, email } = userData?.data || {};


    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);

    const { withimg, setWithimg } = useGetUserdata((state) => state);
    return (
        <div className='font-semibold mt-4 '>
            <div className='text-gray-800'>Profile</div>
            <div className=' flex gap-2 md:gap-3 items-center  my-3 '>
                <div className='h-12 w-12 rounded-full bg-black  sm:m-0'>
                    <img
                        src={Array.isArray(withimg?.profileImg) && withimg?.profileImg[0]
                            ? `data:${withimg?.profileImg[0]?.contentType};base64,${withimg?.profileImg[0]?.data}`
                            : null}
                        alt={withimg?.fullName}
                        className=' h-full w-full rounded-full'
                    />
                </div>
                <div>
                    <h5 className='font-semibold text-[12px] uppercase'>{withimg?.name}</h5>
                    <p className='text-[10px] sm:text-[12px] text-gray-600'>Admin</p>
                </div>
            </div>
            <div className='hover:text-[#fafafa] bg-[#55AD9B] hover:bg-[#3e9180] text-[12px] sm:text-lg h-6 sm:h-8 flex justify-center items-center rounded-sm sm:rounded-lg'>
                {isLoggedIn ? (
                    <NavLink
                        to="/"
                        onClick={() => removeToken()}
                        className=""
                    >
                        Logout
                    </NavLink>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </div>
    )
}

export default SideProfile