import React from "react";
import { Formik, Form, Field } from "formik";
import JSZip from "jszip";  // To handle zipping files
import { UserProjectsForm } from "@/services/lib/YupFormikValidator";
import { toast } from "react-toastify";
import { patchData, postData } from "@/services/apiCall";

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
  { value: 'MERN', label: 'MERN' },
];

const UserProjectForm = () => {
  // Handle form submission
  async function UserForm(values, actions) {
    console.log('Form values:', values);

    // Create a new instance of JSZip
    const zip = new JSZip();

    // Check if userProjects contain files
    if (values.userProjects && values.userProjects.length > 0) {
        // Add uploaded files to the zip archive
        Array.from(values.userProjects).forEach((file) => {
            zip.file(file.name, file); // Ensure `file` is a File object
        });

        // Generate the zip archive asynchronously
        const zipBlob = await zip.generateAsync({ type: "blob" });
        console.log("Zipped Files Blob:", zipBlob);

        // Prepare form data for the upload
        const formData = new FormData();
        formData.append("userProjects", zipBlob, "projects.zip"); // Append the zipped file with a name

        // Add userId to the formData
        const userId = "66f294dd8dd6910bcf37236a"; // Replace with dynamic userId as needed
        formData.append("userId", userId); // Append userId to FormData

        // Prepare project details as an object
        const projectDetails = {
            projectName: values.projectName, // Ensure this comes from your form
            category: values.category,
            technology: values.technology,
            description: values.description,
        };

        // Append the project details directly to the userProjects array in the formData
        formData.append("userProjects[0][projectName]", projectDetails.projectName);
        formData.append("userProjects[0][category]", projectDetails.category);
        formData.append("userProjects[0][technology]", projectDetails.technology);
        formData.append("userProjects[0][description]", projectDetails.description);

        console.log("Before upload:", values);
        try {
            const uploadPromise = postData("/user/projects/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.promise(
                uploadPromise, {
                    pending: "Project uploading...",
                    success: "Your project is uploaded successfully!",
                    error: "Your project could not be uploaded.",
                }
            );

            const data = await uploadPromise;
            console.log("After uploaded:", data);

            // Handle successful upload
            if (data.success) {
                actions.resetForm(); // Reset the form after successful upload
                // Optionally navigate to another page or show success message
                // navigate("/");
            }

        } catch (error) {
            console.error("Error during upload:", error);
        }
    } else {
        console.error("No files selected to upload.");
    }
}
  // Handle file uploads and zip them before submission
  const handleFileUpload = (event, setFieldValue) => {
    const files = event.currentTarget.files;
    setFieldValue("userProjects", files);  // Store the files in Formik's state
  };

  return (
    <Formik
      initialValues={UserProjectsForm.initialValues}
      validationSchema={UserProjectsForm.validationSchema}
      onSubmit={UserForm}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg border-gray-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Project</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold" htmlFor="projectName">
                Project Name
              </label>
              <Field
                type="text"
                name="projectName"
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
              <label className="block text-gray-700 font-bold" htmlFor="technology">
                Technology Use
              </label>
              <Field
                as="select"
                name="technology"
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
            <div className="mb-6">
              <label className="block text-gray-700 font-bold" htmlFor="userProjects">
                Upload Files/Folders (Zipped)
              </label>
              <input
                type="file"
                name="userProjects"
                webkitdirectory="true"  // To allow folder selection
                multiple  // Allow multiple file uploads
                onChange={(event) => handleFileUpload(event, setFieldValue)}
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#3e9180] outline-none rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#55AD9B] text-white font-bold rounded-md hover:bg-[#3e9180]"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserProjectForm;
