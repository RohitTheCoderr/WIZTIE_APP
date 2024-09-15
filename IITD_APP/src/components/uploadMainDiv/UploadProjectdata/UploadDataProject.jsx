
import UploadProject from '@/components/uploadProject/UploadProject';
import ProjectTable from '@/components/UserDataTable/UserTable';
import { NavLink, Outlet } from 'react-router-dom';
function UploadDataProject() {
    return (
        <div className='border-2 h-[10rem] w-[47rem] border-green-800 bg-[#fffbfe] rounded-xl'>
            <div className=' flex justify-between rounded-2xl'>
                {/* <li className='h-11 w-[33.33%] rounded-tl-xl border-b-4 cursor-pointer border-gray-200 hover:border-gray-400 pt-1 text-center font-semibold text-xl list-none bg-purple-400'>Add project</li> */}
                <NavLink
                    to={"/useraccount"}
                    className={({ isActive }) =>
                        `h-11 w-[33.33%] rounded-tl-xl border-b-4 cursor-pointer border-gray-200 hover:border-gray-400 pt-1 text-center font-semibold text-xl list-none bg-purple-400 ${isActive  ? 'after:block border-gray-400' : 'after:hidden'}`
                    }
                >
                   Add project
                </NavLink>


                <li className='h-11 w-[33.33%] border-b-4 cursor-pointer border-gray-200 hover:border-gray-400 pt-1 text-center font-semibold text-xl list-none bg-purple-400'>Assign to</li>
                <li className='h-11 w-[33.33%] rounded-tr-xl border-b-4 cursor-pointer border-gray-200 hover:border-gray-400 pt-1 text-center font-semibold text-xl list-none bg-purple-400'>Chat</li>
            </div>
            <div className='h-[5rem] mt-[1.5rem] flex justify-center items-center w-full m-auto '>
                {/* <Outlet /> */}
                <UploadProject />
            </div>
            <div>
                <ProjectTable />
            </div>
        </div>
    )
}

export default UploadDataProject