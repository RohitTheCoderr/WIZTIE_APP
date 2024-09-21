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

    return (
        <div className=' font-semibold'>
            <div className='text-gray-800'>Profile</div>
            <div className='flex gap-3 items-center my-3'>
                <div className='h-12 w-12 bg-black rounded-full'>
                    <img
                        src={Array.isArray(userProfileData?.profileImg) && userProfileData?.profileImg[0]
                            ? `data:${userProfileData?.profileImg[0]?.contentType};base64,${userProfileData?.profileImg[0]?.data}`
                            : null}
                        alt={userProfileData?.fullName}
                        className=' h-full w-full bg-white rounded-full '
                    />
                </div>
                <div>
                    <h5 className='font-semibold text-[12px] uppercase'>{name}</h5>
                    <p className='text-[12px] text-gray-600'>Admin account</p>
                </div>
            </div>
            <div className='bg-[#55AD9B] h-8 flex justify-center items-center rounded-lg'>
                {isLoggedIn ? (
                    <NavLink
                        to="/"
                        onClick={() => removeToken()}
                        className="text-white"
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