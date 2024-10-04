import UserInfoCard from '@/components/UserInfoCard/UserInfoCard';
import UserProjectForm from '@/components/UserProjectForm/UserProjectForm';
import { getData } from '@/services/apiCall';
import { useAuthStore, useGetProfileUserdata, useGetUserdata } from '@/services/zustandStore';
import { useEffect } from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import UploadDataProject from '../UploadProjectdata/UploadDataProject';

function UserAccount() {

    const CurrentDate = () => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            weekday: 'long',  // "Monday"
            year: 'numeric',  // "2024"
            month: 'long',    // "August"
            day: 'numeric'    // "25"
        });
        return formattedDate;
    };
    
    const isLoggedin = useAuthStore((state) => state.token);
    const { withimg, setWithimg } = useGetUserdata((state) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedin ) {
            navigate("/login");
        } 
        else if(!withimg) {
            navigate("/create_profile")
        } else {
            
        }
    }, [isLoggedin, navigate]);

    const { userProfileData, setUserProfiledata } = useGetProfileUserdata((state) => state);
    useEffect(() => {
        async function getSingleUserData() {
            try {
                const userdataPromise = await getData("/user/profile/");
                if (userdataPromise?.data?.userProfiles[0]) {
                    setUserProfiledata(userdataPromise.data.userProfiles[0])  
                }
            } catch (error) {
                console.log('error in this page ', error)
            }
        }
        getSingleUserData();
    }, [setUserProfiledata]);

    // async function getUserData() {
    //     try {
    //         const userdataPromise = getData("/user/user_data");
    //         const userdata = await userdataPromise;
    //         setUserdata(userdata);
    //         console.log("User data received", userdata);
    //     } catch (error) {
    //         console.log('error in this page ', error)
    //     }
    // }



    const { fullName} = userProfileData || {};
    return (
        // <div className='h-[86vh] w-full m-auto flex justify-between bg-gray-100 '>
        //     <SideNavbar />
            // <div className=' w-[80%] mx-auto  overflow-scroll scrollbar-hide '>
            <div className=' overflow-scroll scrollbar-hide '>
                <div className='w-full pl-12 py-3 h-[5rem]  bg-gray-100'>
                    <h3 className='capitalize caret-pink-500 text-xl font-bold'>
                        Welcome to <span>{withimg?.fullName}</span>
                    </h3>
                    <div className="text-sm">
                        {CurrentDate()}
                    </div>
                </div>
                <div className=' '>
                    <div className=' flex gap-12 flex-wrap my-4'>
                        <UserInfoCard profile={userProfileData} />
                        <Outlet />
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default UserAccount;
