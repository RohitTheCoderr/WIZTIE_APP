import img from "@/assets/images/footerImages/img.jpg";
function UserprofileImg() {
      return (
        <div className='rounded-sm w-full  md:w-[30rem]  h-full'>
            <img className="h-full w-full " src={img} alt="" />
        </div>
      )
}

export default UserprofileImg