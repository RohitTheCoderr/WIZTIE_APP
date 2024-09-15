import Account from "./footersection/Account"
import Downloadapp from "./footersection/DownloadApp"
import Quicklink from "./footersection/QuickLink"
import Subscribe from "./footersection/Subscribe"
import Support from "./footersection/Support"

function Footer() {
  return (
    <div className='w-[100vw] h-auto py-[2rem] float-end bg-[#000000] m-auto flex items-center gap-4 flex-col'>

      <div className='w-[85vw]  m-auto flex flex-wrap justify-between'>
        <div className='w-auto px-2 mt-8'>
          <Subscribe/>
        </div>
        <div className=' w-[10rem] px-2 mt-8'>
          <Support/>
        </div>
        <div className=' px-2 mt-8'>
          <Account/>
        </div>
        <div className=' px-2 mt-8'>
          <Quicklink/>
        </div>
        <div className='px-2 mt-8 '>
          <Downloadapp/>
        </div>
      </div>
      <div className={`text-gray-500 w-[100vw] text-center text-[14px] `}>©️ Copyright Rimel 2022. All right reserved </div>
    </div>
  )
}

export default Footer
