import React, { useState } from 'react';
import LoginImg from "@/assets/images/footerImages/loginImg.jpeg";
import LoginImg1 from "@/assets/images/footerImages/studetimg.jpg";
import { FcGoogle } from "react-icons/fc";
import { TextInput, Button } from '@/components/form';
import { signUpForm, otpForm } from "@/services/lib/YupFormikValidator";
import { Formik, Form } from 'formik';
import { postData } from "@/services/apiCall";
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/services/zustandStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignupPage() {
    const setToken = useAuthStore((state) => state.setToken)
    const [flag, setFlag] = useState(false);
    const [otpID, setOtpID] = useState("");

    const navigate = useNavigate()

    async function submitForm(values, actions) {
        const val = values.phoneNumberOrEmail;
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val;
        } else if (isEmail) {
            values.email = val;
        }

        delete values.phoneNumberOrEmail;
        delete values.confirm_password;

        try {
            if (flag) {
                if (values.phoneNumber) {
                    values.otpID = otpID;
                }
                const userCreate = postData("/user/signup", values);
                toast.promise(
                    userCreate, {
                    pending: "user creating..",
                    success: "user created successfully..",
                    reject: "user can't be created.."
                });

                const response = await userCreate;
                setToken(response.data.token)
                navigate("/")
                actions.resetForm();
                toast("Sign up successful ✌");
            } else {
                const sendOTP = postData("/user/send_signup_otp", values);
                // console.log("otpdtata", otpData);

                toast.promise(
                    sendOTP, {
                    pending: "OTP sending..",
                    success: "OTP sent successfully..",
                    reject: "OTP can't be sent.."
                }
                )
                const otpData = await sendOTP;

                if (isPhoneNumber) {
                    setOtpID(otpData?.data?.otpID);
                }
                if (otpData?.success) {
                    setFlag(true);
                    signUpForm.initialVaues.phoneNumberOrEmail = val
                }
            }

        } catch (error) {
            // actions.resetForm();
            toast(error?.response?.data?.message);
        }

    }

    return (
        <div className=' w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-4 sm:my-6 md:my-[3rem] h-auto flex flex-wrap items-center justify-center sm:justify-center lg:justify-between'>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto'>
                <img className="rounded-[0.25rem]" src={LoginImg1} alt="Login" />
            </div>
            <div className='w-[15rem] inl mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem] h-auto'>

                <Formik
                    initialValues={flag ? { ...signUpForm.initialVaues, otpID } : otpForm.initialVaues}
                    enableReinitialize
                    validationSchema={flag ? signUpForm.validationSchema : otpForm.validationSchema}
                    onSubmit={submitForm}
                >
                    {() => (
                        <Form>
                            <h2 className='font-inter text-[1.2rem] text-center sm:text-start sm:text-[1.4rem] font-Five my-1 tracking-wider'>Sign Up to ShopEase</h2>
                            <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                            <TextInput label="Email or Phone Number *" name="phoneNumberOrEmail" type="input" attribute={{ disabled: flag }} />
                            {flag && (
                                <>
                                    <TextInput label="Name *" name="name" type="input" />
                                    <TextInput label="Password *" name="password" type="password" />
                                    <TextInput label="Confirm Password *" name="confirm_password" type="password" />
                                    <TextInput label="OTP *" name="otp" type="text" />
                                </>)}
                            <Button type="submit" name={flag ? "Create Account" : "Send OTP"} style="w-[100%] my-0 mb-2" />
                            {/* <button className='h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] border-2 w-[100%] rounded-md my-2 flex justify-center gap-4 items-center'>
                                <FcGoogle className='text-[30px]' />
                                <span>Sign up with Google</span>
                            </button> */}
                            <div className='list-none flex items-center gap-6'>
                                <span className='text-[16px]'>Already have an account:</span>
                                <a className='no-underline hover:underline text-[#55AD9B] text-[13px]'><Link to={"/login"}>Login</Link></a>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
}

export default SignupPage;
