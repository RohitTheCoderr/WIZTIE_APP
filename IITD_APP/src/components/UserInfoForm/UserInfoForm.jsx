
import React from "react";
import { Formik, Form, Field } from "formik";
import { UserForm } from "@/services/lib/YupFormikValidator";




const categoryOptions = [
  { value: '', label: '' },
  { value: 'E-commerce', label: 'E-commerce Platforms' },
  { value: 'Mobile', label: 'Mobile Applications' },
  { value: 'Web', label: 'Web Development' },
  { value: 'Game', label: 'Game Development' },
  { value: 'AI', label: 'AI and Machine Learning' },
  { value: 'Data', label: 'Data Science' },
  { value: 'Cybersecurity', label: 'Cybersecurity' },
  { value: 'IoT', label: 'IoT' },
  { value: 'Blockchain', label: 'Blockchain and Cryptocurrency' },
  { value: 'Finance', label: 'Finance and FinTech' },
  { value: 'Robotics', label: 'Robotics and Automation' },
  { value: 'Environmental', label: 'Environmental and Sustainability Projects' },
  { value: 'Augmented', label: 'Augmented Reality (AR) and Virtual Reality (VR)' },
  { value: 'Healthcare', label: 'Healthcare Technology' },
  { value: 'Education', label: 'Education Technology (EdTech)' },
];

const technologyOptions = [
  { value: '', label: '' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Haskell', label: 'Haskell' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Shell', label: 'Shell' },
  { value: 'Fortran', label: 'Fortran' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Clojure', label: 'Clojure' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'F#', label: 'F#' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Python', label: 'Python' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
];

const DataForm = () => {
  async function UserForm(values,action) {
    console.log('valuess',values)
    action.resetForm()
 }

  return (
    <Formik
      initialValues={UserForm.initialValues}
      validationSchema={UserForm.validationSchema}
      // onSubmit={handleSubmit}
    >
      <div className="max-w-md mx-auto  p-8 bg-white shadow-md rounded-lg border-gray-500">
        <h2 className="text-2xl font-bold mb-6 text-center">Create</h2>
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="name">
              Project Name
            </label>
            <Field
              type="text"
              name="name"
              className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="category">
              Category
            </label>
            <Field
              as="select"
              name="category"
              className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-[#3e9180] outline-none"
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold" htmlFor="technologyUse">
              Technology Use
            </label>
            <Field
              as="select"
              name="technologyUse"
              className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:border-[#3e9180] outline-none"
            >
              {technologyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold" htmlFor="description">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#3e9180] outline-none rounded-md"
              placeholder="Enter description"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#55AD9B] text-white font-bold rounded-md hover:bg-[#3e9180]"
          >
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default DataForm;
