import React from "react"
import { Formik, Form, Field } from "formik"

function UserProfileForm() {

  async function submitForm(values) {
    console.log('valuess', values)
  }
  return (
    <>
      <div className=" rounded-3xl w-[40rem]">

        <Formik
          initialValues={{ ...submitForm.initialValues }}
          validationSchema={submitForm.validationSchema}
          onSubmit={submitForm}
        >
          <div className=" mx-auto  p-8 bg-white shadow-md rounded-2xl border-gray-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="fname">
                  First Name
                </label>
                <Field
                  type="text"
                  name="fname"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  placeholder="Enter First Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="lname">
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lname"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Email"
                />
              </div>
              

              <div className="mb-6">
                <label className="block text-gray-700 font-bold " htmlFor="about">
                  About
                </label>
                <Field
                  type="text"
                  name="about"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none rounded-md"
                  placeholder="Enter About"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="education">
                  Education
                </label>
                <Field
                  type="text"
                  name="education"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Education"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="position">
                  Position
                </label>
                <Field
                  type="text"
                  name="position"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Position"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="service">
                  Service
                </label>
                <Field
                  type="text"
                  name="service"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Service"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="career">
                  Career break
                </label>
                <Field
                  type="text"
                  name="career"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Career break"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold " htmlFor="skills">
                  Skills
                </label>
                <Field
                  type="text"
                  name="skills"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                  placeholder="Enter Skills"
                />
              </div>
              <div className="mb-4 cursor-pointer">
                <label className="block text-gray-700 font-bold " htmlFor="skills">
                  Profile Img
                </label>
                <Field
                  type="file"
                  name="profileIMG"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 rounded-md outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
              >
               Submit
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
};

export default UserProfileForm;

