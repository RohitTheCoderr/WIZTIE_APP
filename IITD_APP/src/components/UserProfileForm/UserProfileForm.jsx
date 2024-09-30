
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserProfiledata } from "@/services/lib/YupFormikValidator"; // Assuming the Yup schema is in this file
import { deleteData, getData, patchData, postData } from "@/services/apiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGetUserdata } from "@/services/zustandStore";

function UserProfileForm({ heading }) {

  const { withimg, setWithimg } = useGetUserdata((state) => state);

  const navigate = useNavigate()

  async function submitForm(values, option) {
    
    const formData = new FormData();
    // Iterate over each key-value pair in values
    Object.keys(values).forEach((key) => {
      if (values[key] !== null && values[key] !== undefined) {
        // Handle file input for 'profileImg'
        if (key === "profileImg" && values[key] instanceof File) {
          formData.append(key, values[key]);
        } else {
          // Append other values (convert objects/arrays to JSON strings if necessary)
          const value = typeof values[key] === "object" && !(values[key] instanceof File)
            ? JSON.stringify(values[key]) // Convert objects/arrays to JSON strings
            : values[key]; // Append primitive types directly
          formData.append(key, value);
        }
      }
    });
    // console.log("sssrrr", formData);
    
    if (heading) {
      
      try {
        // for updation time
        // formData.profileId= withimg._id
        
        // console.log("myformedit", formData);
        const updatePromis = patchData("/user/profile/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.promise(
          updatePromis, {
          pending: "profile Updated...",
          success: "Your profile is Updated Successfully",
          error: "Your profile is not Updated "
        }
        )
        const data = await updatePromis;

        // if (data.success) {
        //   navigate("/")
        // }
        option.resetForm()

      } catch (error) {
        console.error("Error:", error);
      }
    }
    else {
      try {
        const userdataPromis = postData("/user/profile/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.promise(
          userdataPromis, {
          pending: "profile createddd...",
          success: "Your profile is created Successfully",
          error: "Your profile is not created "
        }
        )
        const data = await userdataPromis;

        if (data.success) {
          navigate("/")
        }
        option.resetForm()

      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  // +++++++++ for delete user PRofile data ++++++
  // async function deleteUser(profileId) {
  //     try {
  //       const userdata = await deleteData("/user/profile/", profileId);
  //       console.log("User deleted profile data received:", userdata);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }

  // useEffect(()=>{
  //   getuserData()
  // },[])

  // async function getuserData() {
  //     try {
  //       const userdata = await getData("/user/profile/");
  //       console.log("User profile data received:", userdata);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }


  return (
    <div className="rounded-3xl w-auto mx-auto p-8 bg-white shadow-md  border-gray-500">
      <Formik
        initialValues={UserProfiledata.initialValues}
        validationSchema={UserProfiledata.validationSchema}
        onSubmit={submitForm}
      >
        {({ setFieldValue }) => (
          <Form>
            <h2 className="text-2xl font-bold mb-6 text-center">{heading ? `${heading}` : "Create"} Profile</h2>

            <div className="w-[100%] flex justify-around gap-4 flex-wrap">

              {/* Full Name */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="fullName">
                  Full Name
                </label>
                <Field
                  type="text"
                  name="fullName"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  placeholder="Enter Full Name"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Gender */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="Gender">
                  Gender
                </label>
                <Field
                  as="select"
                  name="Gender"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                >
                  <option value="" label="Select Gender" />
                  <option value="Male" label="Male" />
                  <option value="Female" label="Female" />
                  <option value="Other" label="Other" />
                </Field>
                <ErrorMessage name="Gender" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Date of Birth */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="DOB">
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="DOB"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                />
                <ErrorMessage name="DOB" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Phone Number */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="PhoneNumber">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="PhoneNumber"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Phone Number"
                />
                <ErrorMessage name="PhoneNumber" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Address */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="Address">
                  Address
                </label>
                <Field
                  type="text"
                  name="Address"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Address"
                />
                <ErrorMessage name="Address" component="div" className="text-red-500 text-sm" />
              </div>

              {/* City */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="city">
                  City
                </label>
                <Field
                  type="text"
                  name="city"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter City"
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>

              {/* About */}
              <div className="mb-6 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="aboutMsg">
                  About
                </label>
                <Field
                  as="textarea"
                  name="aboutMsg"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter About"
                />
                <ErrorMessage name="aboutMsg" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Education */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="education">
                  Education
                </label>
                <Field
                  type="text"
                  name="education"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Education"
                />
                <ErrorMessage name="education" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Position */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="position">
                  Position
                </label>
                <Field
                  type="text"
                  name="position"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Position"
                />
                <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Service */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="service">
                  Service
                </label>
                <Field
                  type="text"
                  name="service"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Service"
                />
                <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Career Break */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="careerBreak">
                  Career Break
                </label>
                <Field
                  type="text"
                  name="careerBreak"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Career Break"
                />
                <ErrorMessage name="careerBreak" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Skills */}
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="skills">
                  Skills
                </label>
                <Field
                  type="text"
                  name="skills"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Skills"
                />
                <ErrorMessage name="skills" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="lindinProfileLink">
                  lindinProfileLink
                </label>
                <Field
                  type="text"
                  name="lindinProfileLink"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter lindin Profile Link"
                />
                <ErrorMessage name="lindinProfileLink" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4 w-[15rem]">
                <label className="block text-gray-700 font-bold" htmlFor="instagramProfileLink">
                  instagramProfileLink
                </label>
                <Field
                  type="text"
                  name="instagramProfileLink"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter instagram Profile Link"
                />
                <ErrorMessage name="instagramProfileLink" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Profile Image */}
              <div className="mb-4 w-[15rem] cursor-pointer">
                <label className="block text-gray-700 font-bold" htmlFor="profileImg">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profileImg"
                  onChange={(event) => setFieldValue("profileImg", event.currentTarget.files[0])}
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                />
                <ErrorMessage name="profileImg" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[15rem] py-2 bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* <button className="bg-red-500 h-5 w-14" onClick={()=>deleteUser("66ebe147ece3a46c43a6604f")}>delete</button> */}
    </div>
  );
}

export default UserProfileForm
