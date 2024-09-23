// // import UserInfoCard from "@/components/UserInfoCard/UserInfoCard";
// // import UserMoreData from "@/components/userMoreData/UserMoreData"
// // import UserProfileForm from "@/components/UserProfileForm/UserProfileForm"
// // import { getData } from "@/services/apiCall";
// // import { useGetProfileUserdata, useGetUserdata } from "@/services/zustandStore";
// // import { useEffect, useState } from "react"
// // import { FaCircleInfo } from "react-icons/fa6";
// // import { BsFillInfoSquareFill } from "react-icons/bs";
// // import { FaLinkedin, FaInstagram, FaUserGraduate, FaBirthdayCake, FaTransgender } from "react-icons/fa";
// // import { FcPositiveDynamic } from "react-icons/fc";
// // import { PiLinkSimpleBreakBold } from "react-icons/pi";
// // import { GrServices } from "react-icons/gr";
// // import { GiSkills } from "react-icons/gi";
// // function EditProfile() {
// //   // const [profiledata, setProfiledata]=useState()
// //   const { withimg, setWithimg } = useGetUserdata((state) => state);

// //   console.log("withImg", withimg);
// //   const { fullName, PhoneNumber, email, position, Address, profileImg, city, education, instagramProfileLink, lindinProfileLink, service, skills, DOB, Gender, careerBreak, aboutMsg } = withimg || {};


// //   return (
// //     <div className='bg-black w-[80vw] my-8'>
// //       <h2 className="text-2xl font-bold text-center ">Your Old Profile </h2>
// //       <div className="my-4 flex bg-pink-600">
// //         <UserInfoCard profile={withimg} />
// //         <div className="h-auto w-[40rem] bg-white  flex flex-wrap">
// //           {/* <UserMoreData data={withimg} style="w-full" /> */}
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FaUserGraduate className="text-2xl" />
// //             </div>

// //             <div>Education:</div>
// //             <div>{education}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <GiSkills className="text-2xl" />
// //             </div>
// //             <div>Skills:</div>
// //             <div>{skills}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FcPositiveDynamic className="text-2xl" />
// //             </div>
// //             <div>Position:</div>
// //             <div>{position}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FaBirthdayCake className="text-2xl" />
// //             </div>
// //             <div>Birth"</div>
// //             <div>{DOB}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FaTransgender className="text-2xl" />
// //             </div>
// //             <div>Gender"</div>
// //             <div>{Gender}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <PiLinkSimpleBreakBold className="text-2xl" />
// //             </div>
// //             <div>careerBreak"</div>
// //             <div>{careerBreak}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <GrServices className="text-2xl" />
// //             </div>
// //             <div>service"</div>
// //             <div>{service}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FaInstagram className="text-2xl" />
// //             </div>
// //             <div>ProfileLink"</div>
// //             <div>{instagramProfileLink}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <FaLinkedin className="text-2xl" />
// //             </div>
// //             <div>ProfileLink"</div>
// //             <div>{lindinProfileLink}</div>
// //           </div>
// //           <div className="flex w-[17rem] bg-orange-800">
// //             <div className="h-[3rem] w-[3rem] bg-black">
// //               <BsFillInfoSquareFill className="text-2xl" />
// //             </div>
// //             <div>aboutMsg"</div>
// //             <div>{aboutMsg}</div>
// //           </div>
// //         </div>
// //       </div>
// //       <UserProfileForm heading="Edit" />
// //     </div>
// //   )
// // }

// // export default EditProfile



// import UserInfoCard from "@/components/UserInfoCard/UserInfoCard";
// import UserMoreData from "@/components/userMoreData/UserMoreData";
// import UserProfileForm from "@/components/UserProfileForm/UserProfileForm";
// import { useGetUserdata } from "@/services/zustandStore";
// import { FaUserGraduate, FaBirthdayCake, FaTransgender, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { FcPositiveDynamic } from "react-icons/fc";
// import { PiLinkSimpleBreakBold } from "react-icons/pi";
// import { GrServices } from "react-icons/gr";
// import { GiSkills } from "react-icons/gi";
// import { BsFillInfoSquareFill } from "react-icons/bs";

// function EditProfile() {
//   const { withimg } = useGetUserdata((state) => state);
//   const {
//     fullName, PhoneNumber, email, position, Address, profileImg, city,
//     education, instagramProfileLink, lindinProfileLink, service, skills, DOB,
//     Gender, careerBreak, aboutMsg
//   } = withimg || {};

//   return (
//     <div className="container mx-auto my-8 p-6 bg-gray-100 rounded-xl shadow-lg">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Current Profile</h2>

//       <div className="flex flex-col lg:flex-row lg:space-x-8">
//         {/* Profile Info Card */}
//         <UserInfoCard profile={withimg} />

//         {/* More Data Section */}
//         <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <InfoCard
//               icon={<FaUserGraduate className="text-blue-600 text-3xl" />}
//               label="Education"
//               value={education}
//             />
//             <InfoCard
//               icon={<GiSkills className="text-yellow-500 text-3xl" />}
//               label="Skills"
//               value={skills}
//             />
//             <InfoCard
//               icon={<FcPositiveDynamic className="text-3xl" />}
//               label="Position"
//               value={position}
//             />
//             <InfoCard
//               icon={<FaBirthdayCake className="text-pink-600 text-3xl" />}
//               label="Date of Birth"
//               value={DOB}
//             />
//             <InfoCard
//               icon={<FaTransgender className="text-purple-500 text-3xl" />}
//               label="Gender"
//               value={Gender}
//             />
//             <InfoCard
//               icon={<PiLinkSimpleBreakBold className="text-gray-600 text-3xl" />}
//               label="Career Break"
//               value={careerBreak}
//             />
//             <InfoCard
//               icon={<GrServices className="text-green-600 text-3xl" />}
//               label="Service"
//               value={service}
//             />
//             <InfoCard
//               icon={<FaInstagram className="text-red-500 text-3xl" />}
//               label="Instagram Profile"
//               value={instagramProfileLink}
//             />
//             <InfoCard
//               icon={<FaLinkedin className="text-blue-700 text-3xl" />}
//               label="LinkedIn Profile"
//               value={lindinProfileLink}
//             />
//             <InfoCard
//               icon={<BsFillInfoSquareFill className="text-gray-700 text-3xl" />}
//               label="About"
//               value={aboutMsg}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Profile Edit Form */}
//       <div className="mt-8">
//         <UserProfileForm heading="Edit Profile" />
//       </div>
//     </div>
//   );
// }

// function InfoCard({ icon, label, value }) {
//   return (
//     <div className="flex items-center p-4 bg-gray-50 rounded-md shadow-sm space-x-4">
//       <div className="flex-shrink-0 bg-gray-200 p-2 rounded-full">
//         {icon}
//       </div>
//       <div className="flex flex-col">
//         <span className="text-sm text-gray-500">{label}</span>
//         <span className="text-lg font-medium text-gray-800">{value || 'Not provided'}</span>
//       </div>
//     </div>
//   );
// }

// export default EditProfile;



import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
// import <FaLocationDot></FaLocationDot>
import { FaUserGraduate, FaBirthdayCake, FaTransgender, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcPositiveDynamic } from "react-icons/fc";
import { PiLinkSimpleBreakBold } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import UserProfileForm from "@/components/UserProfileForm/UserProfileForm";
import { useGetUserdata } from "@/services/zustandStore";
import { FaMapLocationDot } from "react-icons/fa6";

function EditProfile() {
  const { withimg } = useGetUserdata((state) => state);

  const {
    fullName, PhoneNumber, email, position, Address, profileImg, city,
    education, instagramProfileLink, lindinProfileLink, service, skills, DOB,
    Gender, careerBreak, aboutMsg
  } = withimg || {};

  return (
    <div className="container mx-auto bg-transparent w-[82%] rounded-xl overflow-scroll scrollbar-hide pr-6 pt-12 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Current Profile</h2>

      {/* Profile Picture and Name */}
      <div className=" flex flex-col justify-center items-center ">
        <div className="h-[6rem] bg-slate-50 w-[6rem] rounded-full overflow-hidden border">
          <img
            src={Array.isArray(profileImg) && profileImg[0] ?
              `data:${profileImg[0]?.contentType};base64,${profileImg[0]?.data}` : null}
            alt={fullName}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center text-center">
          <h1 className="text-2xl font-bold uppercase">{fullName}</h1>
          <p className="text-lg text-gray-500">{position}</p>
        </div>
      </div>
      {/* <div className="bg-violet-500 mx-auto "> */}


      {/* Contact Information */}
        <div className="  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4    mb-[-2rem]">
          <InfoItem icon={<MdEmail className="text-green-600 text-3xl" />} label="Email" value={email} />
          <InfoItem icon={<BsTelephoneFill className="text-blue-600 text-3xl" />} label="Phone" value={PhoneNumber} />
          <InfoItem icon={<FaMapLocationDot className="text-red-600 text-3xl" />} label="Address" value={`${Address}, ${city}`} />
        </div>

        {/* Personal Information */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4   mb-[-2.5rem]">
          <InfoItem icon={<FaBirthdayCake className="text-pink-600 text-3xl" />} label="Date of Birth" value={DOB} />
          <InfoItem icon={<FaTransgender className="text-purple-600 text-3xl" />} label="Gender" value={Gender} />
        </div>

        {/* Professional Information */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4   mb-[-2.5rem]">
          <InfoItem icon={<FaUserGraduate className="text-blue-500 text-3xl" />} label="Education" value={education} />
          <InfoItem icon={<GiSkills className="text-yellow-600 text-3xl" />} label="Skills" value={skills} />
          <InfoItem icon={<FcPositiveDynamic className="text-3xl" />} label="Position" value={position} />
          <InfoItem icon={<GrServices className="text-green-500 text-3xl" />} label="Service" value={service} />
        </div>

        {/* Social and Additional Information */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4  ">
          <InfoItem icon={<FaInstagram className="text-red-600 text-3xl" />} label="Instagram" value={instagramProfileLink} />
          <InfoItem icon={<FaLinkedin className="text-blue-700 text-3xl" />} label="LinkedIn" value={lindinProfileLink} />
          <InfoItem icon={<PiLinkSimpleBreakBold className="text-gray-600 text-3xl" />} label="Career Break" value={careerBreak} />
          <InfoItem icon={<MdEmail className="text-gray-500 text-3xl" />} label="About" value={aboutMsg} />
        </div>
        {/* </div> */}

      {/* Edit Profile Form */}
      <div className="mt-8">
        <UserProfileForm heading="Edit Profile" />
      </div>
    </div>

  );
}

// Component to render individual information blocks
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center p-2 my-2 bg-white shadow-sm rounded-lg space-x-4 ">
      <div className="p-4 bg-gray-200 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium text-gray-800">{value || 'Not provided'}</p>
      </div>
    </div>
  );
}

export default EditProfile;


// import React from "react";
// import { MdEmail } from "react-icons/md";
// import { BsTelephoneFill } from "react-icons/bs";
// import { FaUserGraduate, FaBirthdayCake, FaTransgender, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FcPositiveDynamic } from "react-icons/fc";
// import { PiLinkSimpleBreakBold } from "react-icons/pi";
// import { GrServices } from "react-icons/gr";
// import { GiSkills } from "react-icons/gi";
// import UserProfileForm from "@/components/UserProfileForm/UserProfileForm";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { useGetUserdata } from "@/services/zustandStore";

// function EditProfile() {
//   const { withimg } = useGetUserdata((state) => state);
  
//   const {
//     fullName, PhoneNumber, email, position, Address, profileImg, city,
//     education, instagramProfileLink, lindinProfileLink, service, skills, DOB,
//     Gender, careerBreak, aboutMsg
//   } = withimg || {};

//   return (
//     <div className="container mx-auto p-6 bg-gray-100 rounded-xl shadow-lg overflow-scroll">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Current Profile</h2>

//       {/* Profile Picture and Name */}
//       <div className="flex justify-center items-center space-x-6">
//         <div className="h-[6rem] w-[6rem] rounded-full overflow-hidden border">
//           <img
//             src={Array.isArray(profileImg) && profileImg[0] ?
//               `data:${profileImg[0]?.contentType};base64,${profileImg[0]?.data}` : null}
//             alt={fullName}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold uppercase">{fullName}</h1>
//           <p className="text-lg text-gray-500">{position}</p>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <SectionHeading title="Contact Information" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
//         <InfoItem icon={<MdEmail className="text-green-600 text-3xl" />} label="Email" value={email} />
//         <InfoItem icon={<BsTelephoneFill className="text-blue-600 text-3xl" />} label="Phone" value={PhoneNumber} />
//         <InfoItem icon={<FaMapLocationDot className="text-red-600 text-3xl" />} label="Address" value={`${Address}, ${city}`} />
//       </div>

//       {/* Personal Information */}
//       <SectionHeading title="Personal Information" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
//         <InfoItem icon={<FaBirthdayCake className="text-pink-600 text-3xl" />} label="Date of Birth" value={DOB} />
//         <InfoItem icon={<FaTransgender className="text-purple-600 text-3xl" />} label="Gender" value={Gender} />
//       </div>

//       {/* Professional Information */}
//       <SectionHeading title="Professional Information" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
//         <InfoItem icon={<FaUserGraduate className="text-blue-500 text-3xl" />} label="Education" value={education} />
//         <InfoItem icon={<GiSkills className="text-yellow-600 text-3xl" />} label="Skills" value={skills} />
//         <InfoItem icon={<FcPositiveDynamic className="text-3xl" />} label="Position" value={position} />
//         <InfoItem icon={<GrServices className="text-green-500 text-3xl" />} label="Service" value={service} />
//       </div>

//       {/* Social and Additional Information */}
//       <SectionHeading title="Social and Additional Information" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4   ">
//         <InfoItem icon={<FaInstagram className="text-red-600 text-3xl" />} label="Instagram" value={instagramProfileLink} />
//         <InfoItem icon={<FaLinkedin className="text-blue-700 text-3xl" />} label="LinkedIn" value={lindinProfileLink} />
//         <InfoItem icon={<PiLinkSimpleBreakBold className="text-gray-600 text-3xl" />} label="Career Break" value={careerBreak} />
//         <InfoItem icon={<MdEmail className="text-gray-500 text-3xl" />} label="About" value={aboutMsg} />
//       </div>

//       {/* Edit Profile Form */}
//       <div className="mt-8">
//         <UserProfileForm heading="Edit Profile" />
//       </div>
//     </div>
//   );
// }

// // Component to render individual information blocks
// function InfoItem({ icon, label, value }) {
//   return (
//     <div className="flex items-center p-4 my-2 bg-white shadow-sm rounded-lg space-x-4 ">
//       <div className="p-3 bg-gray-200 rounded-full">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm text-gray-500">{label}</p>
//         <p className="text-lg font-medium text-gray-800">{value || 'Not provided'}</p>
//       </div>
//     </div>
//   );
// }

// // Component for section headings
// function SectionHeading({ title }) {
//   return (
//     <h3 className="text-xl my-0 font-semibold  text-gray-700 mt-4 mb-2">{title}</h3>
//   );
// }

// export default EditProfile;
