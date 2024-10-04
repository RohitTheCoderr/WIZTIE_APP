import LoginImg from "@/assets/images/footerImages/loginImg.jpeg"
import LoginImg1 from "@/assets/images/footerImages/studetimg.jpg";
import { Formik, Form } from 'formik'
import { Button, TextInput } from "@/components/form"
import { LoginForm } from '@/services/lib/YupFormikValidator'
import { postData } from "@/services/apiCall"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/services/zustandStore"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

export default function LogInPage() {
    const setToken = useAuthStore((state) => state.setToken)
    const navigate = useNavigate()

    async function submitForm(values, option) {
        const val = values.phoneNumberOrEmail
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val
        }
        else if (isEmail) {
            values.email = val
        }

        delete values.phoneNumberOrEmail

        try {
            const myPromise = postData("/user/login", values)
            toast.promise(
                myPromise,
                {
                    pending: 'logging...',
                    success: 'logged in 👌',
                    error: 'something went wrong.. 🤯',
                }
            );

            const data = await myPromise;

            if (data.success) {
                console.log("token in login", data?.data?.token);
                
                setToken(data?.data?.token)
                navigate("/")
            }
            option.resetForm()
        } catch (error) {
            toast.warn("An error occurred:" + error?.response?.data?.message)
        }
    }
    return (
        <div className=' w-[100vw] md:w-[100vw] md:justify-around lg:w-[90vw] my-4 sm:my-6 md:my-[3rem] h-auto  flex flex-wrap items-center justify-center sm:justify-center lg:justify-between '>
            <div className='w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[50vw] xl:w-[55vw] h-auto  '>
                <img className="rounded-[0.25rem]" src={LoginImg1} alt="" />
            </div>
            <div className='w-[15rem] mt-6 md:mt-0 sm:w-[20rem] md:w-[17rem] lg:w-[17rem] xl:w-[20rem]  h-auto '>
                <Formik
                    initialValues={LoginForm.initialVaues}
                    validationSchema={LoginForm.validationSchema}
                    onSubmit={submitForm}
                >
                    {() => (
                        <Form action="">
                            <h2 className='font-inter text-[1.2rem] text-center sm:text-start  sm:text-[1.4rem] font-Five my-1 tracking-wider'>Log in to ShopEase</h2>
                            <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>Enter your details below</p>
                            <TextInput label={"Email or Phone Number *"} name={"phoneNumberOrEmail"} type={"input"} />
                            <TextInput label={"Password *"} name={"password"} type={"password"} />
                            <div className='flex justify-between items-center my-[1.2rem]'>
                                <Button type="submit" name={"Log In"} style={"w-[5.5rem]"} />
                                <div className="">
                                    <li className='list-none no-underline hover:underline text-[#55AD9B] text-[13px] my-2'><Link to={"/forgetpassword"}>Forget password ?</Link></li>
                                    <li className='list-none no-underline hover:underline text-[#55AD9B] text-[13px] my-2'><Link to={"/signup"}>Create Account</Link></li>
                                </div> 
                                
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}

