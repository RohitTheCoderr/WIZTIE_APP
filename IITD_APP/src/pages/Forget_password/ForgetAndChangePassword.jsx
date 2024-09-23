import { useState } from 'react';
import LoginImg from "@/assets/images/footerImages/loginImg.jpeg";
import LoginImg1 from "@/assets/images/footerImages/studetimg.jpg";
import { changePassword, otpForm } from "@/services/lib/YupFormikValidator";
import { TextInput, Button } from '@/components/form';
import { Formik, Form } from 'formik';
import { postData } from "@/services/apiCall";
import { patchData } from '@/services/apiCall';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ForgetAndChangePassword() {
    const [flag1, setFlag1] = useState(false);
    const [otpID, setOtpID] = useState('string');
    const navigate = useNavigate()

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
                delete values.otpID
                const response = patchData("/user/change_password", values);
                console.log("this is response message", response);
                toast.promise(response, {
                    pending: "password changing.",
                    success: "password changed successfully",
                    reject: "password  can't changed"
                })
                await response;
                navigate("/")
            } else {
                const otpDataPromise = postData("/user/send_forgot_password_otp", values);
                toast.promise(otpDataPromise, {
                    pending: "sending OTP",
                    success: "OTP sent",
                    reject: "OTP can't be sent"
                })

                const otpData = await otpDataPromise
                setFlag1(otpData?.success);
                setOtpID(otpData?.data?.otpID);
                changePassword.initialVaues.phoneNumberOrEmail = val
            }
        } catch (error) {
            actions.resetForm();
            alert("An error occurred: " + error?.response?.data?.message);
        }
    }

    return (
        <div className='w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-[3rem] h-auto flex flex-wrap items-center justify-center sm:justify-center lg:justify-between'>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto'>
                <img className="rounded-[0.25rem]" src={LoginImg1} alt="Login" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem] h-auto'>
                <Formik
                    initialValues={flag1 ? { ...changePassword.initialVaues, otpID } : otpForm.initialVaues}
                    validationSchema={flag1 ? changePassword.validationSchema : otpForm.validationSchema}
                    onSubmit={submitForm}
                    enableReinitialize
                >
                    {() => (
                        <Form>
                            <h2 className='font-inter text-[1.2rem] text-center sm:text-start sm:text-[1.4rem] font-Five my-1 tracking-wider'>
                                {flag1 ? "Change Password to ShopEase" : "Forget password to ShopEase"}
                            </h2>
                            <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>
                                Enter your details below
                            </p>
                            <TextInput label="Email or Phone Number *" name="phoneNumberOrEmail" type="input" />
                            {flag1 && (
                                <>
                                    <TextInput label="Password *" name="password" type="password" />
                                    <TextInput label="Confirm Password *" name="confirm_password" type="password" />
                                    <TextInput label="OTP *" name="otp" type="text" />
                                </>
                            )}
                            <Button type="submit" name={flag1 ? "Submit" : "Send OTP"} style="w-[100%] my-0 mb-2" />
                            <div className='flex items-center gap-6'>
                                <span className='text-[16px]'>Go to Login page</span>
                                <a className='no-underline hover:underline text-[#db4444] text-[13px]'><Link to={"/login"}>Login</Link></a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ForgetAndChangePassword;
