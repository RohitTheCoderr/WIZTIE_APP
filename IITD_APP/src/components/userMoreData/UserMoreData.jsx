import React from 'react';

function UserMoreData({ data,style }) {
  const userFields = [
    { label: "Email-Id", key: "email" },
    { label: "Date Of Birth", key: "DOB" },
    { label: "Gender", key: "Gender" },
    { label: "Education", key: "education" },
    { label: "Address", key: "Address" },
    { label: "City", key: "city" },
    { label: "Career Break", key: "careerBreak" },
    { label: "Skills", key: "skills" },
    { label: "Position", key: "position" },
    { label: "Services", key: "service" }
  ];

  return (
    // <div className='w-auto m-auto'>
    //   <details className="cursor-pointer">
    //     <summary className="font-bold text-[#55ab9b] py-2 ml-16 ">more Details</summary>
        <div className=' bg-gray-100 rounded-xl  flex justify-around  flex-wrap'>
          {userFields.map((field, index) => (
            <div key={index} className={` ${style} px-2 w-[15rem] flex items-center gap-4 rounded-sm h-[2.5rem] my-1`}>
              <p className='font-bold text-md text-[#55ab9b] font-sans'>{field.label} :</p>
              <p className='text-sm'>{data[field.key] || "Not Available"}</p>
              {/* <p>hello</p> */}
            </div>
          ))}
        </div>
    //   </details>
    // </div>
  );
}

export default UserMoreData;
