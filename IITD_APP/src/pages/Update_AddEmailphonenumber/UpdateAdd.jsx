import React, { useState } from 'react';
import LoginImg from "@/assets/images/footerImages/loginImg.jpeg";
import LoginImg1 from "@/assets/images/footerImages/studetimg.jpg";
import { updateAddemailPhoneNumber, otpForm } from "@/services/lib/YupFormikValidator";
import { TextInput, Button } from '@/components/form';
import { Formik, Form } from 'formik';
import { postData, patchData } from "@/services/apiCall";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/services/zustandStore/zustandStore"

function UpdateAdd() {
    const [flag1, setFlag1] = useState(false);
    const [otpID, setOtpID] = useState('');

    const isLoggedin = useAuthStore(s => s.token)
    const navigate = useNavigate()
    if (!isLoggedin) {
        navigate("/login")
    }
    async function submitForm(values, actions) {
        const val = values.phoneNumberOrEmail;
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val;
        } else if (isEmail) {
            values.email = val;
        } else {
            alert("Please enter a valid phone number or email.");
            return;
        }

        delete values.phoneNumberOrEmail;
        delete values.confirm_password;
        console.log("after delete form data", values);

        try {
            if (flag1) {
                if (values.phoneNumber) {
                    values.otpID = otpID;
                }
                console.log(flag1);
                console.log("before hit change url", values);
                const response = await patchData("/user/phone_or_email_update", values);
                console.log("this is response message", response);
                actions.resetForm();
                alert("Update/ Add PhoneNumber or Email successful 🥰");
            } else {
                const otpData = await postData("/user/send_phone_or_email_otp", values);
                setOtpID(otpData?.data?.otpID);
                setFlag1(otpData?.success);
                alert("OTP sent successfully to your phone number or email.");
            }
        } catch (error) {
            actions.resetForm();
            alert("An error occurred: " + error?.response?.data?.message);
        }
    }

    return (
        <div className='w-full md:justify-around lg:w-[90vw] my-4 sm:my-6 md:my-[3rem] h-auto flex flex-wrap items-center justify-center lg:justify-between'>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto'>
                <img className="rounded-md" src={LoginImg1} alt="Update" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem] h-auto'>
                <Formik
                    initialValues={flag1 ? { ...updateAddemailPhoneNumber.initialValues, otpID } : otpForm.initialVaues}
                    validationSchema={flag1 ? updateAddemailPhoneNumber.validationSchema : otpForm.validationSchema}
                    onSubmit={submitForm}
                >
                    {({ values }) => (
                        <Form>
                            <h2 className='font-inter text-lg text-center sm:text-start sm:text-xl font-Five my-1 tracking-wider'>
                                {flag1 ? "Update/Add Email/PhoneNumber " : "Generate OTP for Update/Add Email/PhoneNumber"}
                            </h2>
                            <p className='text-sm sm:text-base text-center sm:text-start font-Poppins tracking-wider'>
                                Enter your details below
                            </p>
                            <TextInput label="Email or Phone Number *" name="phoneNumberOrEmail" type="input" />
                            {flag1 && (
                                <>
                                    <TextInput label="OTP *" name="otp" type="text" />
                                </>
                            )}
                            <Button type="submit" name={flag1 ? "Submit" : "Send OTP"} style="w-full my-0 mb-2" />
                            <div className='flex items-center gap-6'>
                                <span className='text-base'>Go to Sign Up</span>
                                <Link className='no-underline hover:underline text-red-600 text-sm' to={"/signup"}> Sign up</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default UpdateAdd;
