import React from 'react'
import { Button } from '../form'
import { NavLink } from 'react-router-dom'
import { useAuthStore, useGetUserdata } from '@/services/zustandStore';

function SideProfile() {

    const { removeToken, token } = useAuthStore((state) => state);
    const isLoggedIn = !!token;
    const { userData } = useGetUserdata((state) => state);

    const { name, phoneNumber, email } = userData?.data || {};


    return (
        <div className=' font-semibold'>
            <div className='text-gray-800'>Profile</div>
            <div className='flex gap-3 items-center my-3'>
                <div className='h-12 w-12 bg-black rounded-full'></div>
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