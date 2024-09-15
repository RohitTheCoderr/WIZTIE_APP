import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postData } from '@/services/apiCall';
import { uploadFolder } from '@/services/lib/YupFormikValidator';
import { toast } from 'react-toastify';

function UploadDiv() {
    async function submitForm(values, options) {
        console.log("file", values);

        // try {
        //     const myPromise = postData("/projects/upload", values);
        //     toast.promise(
        //         myPromise,
        //         {
        //             pending: 'Uploading...',
        //             success: 'Upload successful 👌',
        //             error: 'Upload failed 🤯',
        //         }
        //     );

        //     const data = await myPromise;

        //     if (data.success) {
        //         // Handle success (e.g., set token, navigate, etc.)
        //         options.resetForm();
        //     }
        // } catch (error) {
        //     toast.warn("An error occurred: " + error?.response?.data?.message);
        // }
    }

    return (
        <>
            <Formik
                // initialValues={uploadFolder.initialVaues}
                // validationSchema={uploadFolder.validationSchema}
                onSubmit={submitForm}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className='w-[25rem] h-[13rem] bg-slate-400'>
                            <Field
                                as="textarea"
                                name="description"
                                cols='51'
                                placeholder='About your project'
                                className='border px-1 rounded-xl'
                            />
                            <div className='w-full flex '>
                                <input
                                    className='w-[60%] '
                                    type="file"
                                    id="folderInput"
                                    webkitdirectory="true"
                                    directory="true"
                                    multiple
                                    onChange={(event) => {
                                        const files = event.currentTarget.files;
                                        setFieldValue("folder", files);
                                    }}
                                />
                                <button type="submit" className='h-8 px-4 border-2 rounded-md'>Upload Folder</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default UploadDiv;