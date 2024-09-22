import UploadProjectBtn from '@/components/uploadProjectBtn/UploadProjectBtn';
import ProjectTable from '@/components/UserProjectTable/UserProjectTable';
import { NavLink } from 'react-router-dom';
function UploadDataProject() {
    return (
        <div className='border-2 h-[10rem] w-[47rem] border-green-800 bg-[#fffbfe] rounded-xl'>
            <div className=' flex justify-between rounded-2xl'>
                <NavLink
                    to={"/useraccount"}
                    className={({ isActive }) =>`h-11 w-[33.33%] rounded-tl-xl border-b-4 cursor-pointer  hover:border-[#55AD9B] pt-1 text-center font-semibold text-xl list-none bg-[#95D2B3] ${isActive  ? 'after:block border-[#55AD9B]' : 'after:hidden'}`}
                >
                   Add project
                </NavLink>
                <li className='h-11 w-[33.33%] border-b-4 cursor-pointer border-gray-200 hover:border-[#55AD9B] pt-1 text-center font-semibold text-xl list-none bg-[#95D2B3]'>Assign to</li>
                <li className='h-11 w-[33.33%] rounded-tr-xl border-b-4 cursor-pointer border-gray-200 hover:border-[#55AD9B] pt-1 text-center font-semibold text-xl list-none bg-[#95D2B3]'>Chat</li>
            </div>
            <div className='h-[5rem] mt-[1.5rem] flex justify-center items-center w-full m-auto '>
                <UploadProjectBtn />
            </div>
            <div>
                <ProjectTable />
            </div>
        </div>
    )
}

export default UploadDataProject