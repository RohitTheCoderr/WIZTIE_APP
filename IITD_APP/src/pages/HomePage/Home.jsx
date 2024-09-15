import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import "./Home.css";
import Rocket from "..//../assets/Rocket.mp4";
import img from "@/assets/images/footerImages/img.jpg";
import one from ".//..//../assets/homeImage/download.jpeg";
import t2 from ".//..//../assets/homeImage/2.jpeg";
import t3 from ".//..//../assets/homeImage/3.jpeg";
import t4 from ".//..//../assets/homeImage/4.jpeg";
import t5 from ".//..//../assets/homeImage/5.jpg";
import t6 from ".//..//../assets/homeImage/6.jpeg";
import t7 from ".//..//../assets/homeImage/7.png";
import t8 from ".//..//../assets/homeImage/8.jpeg";
import t9 from ".//..//../assets/homeImage/9.jpeg";
import t10 from ".//..//../assets/homeImage/10.jpeg";
import t11 from ".//..//../assets/homeImage/11.jpeg";
import t12 from ".//..//../assets/homeImage/12.jpeg";
import t13 from ".//..//../assets/homeImage/13.jpeg";
import t14 from ".//..//../assets/homeImage/14.jpeg";
import t15 from ".//..//../assets/homeImage/15.jpeg";

export default function Home() {
  const ec =
    "https://www.bing.com/images/search?view=detailV2&ccid=JzWR2Bgi&id=2C729CBA9C7918A4673C2DCCFFE8FBF08861A6EE&thid=OIP.JzWR2BgiZ0DoQE6NxuDdDQHaFk&mediaurl=https%3A%2F%2Fwww.liveadmins.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fecommerce-2015.jpg&exph=1203&expw=1600&q=ecommerce+&simid=608032765708299352&FORM=IRPRST&ck=43A966136E317D8E376DB5F26EA68940&selectedIndex=14&itb=0&cw=1375&ch=666&ajaxhist=0&ajaxserp=0";
  return (
    <>
      <div className="container w-full ">
        {/* <div className="navbar w-full flex justify-between bg-white border-b-2 border-gray-200 items-center border-2 ">
          <div className="nav-icon text-[#0062FF] text-[25px] tracking-[0.5px]">
            <span className="span-icon text-[#124EB5] text-[25px]">WIZ</span>TIE
          </div>
          <div className="nav-right-icons">
            <LuLogIn className="text-3xl " />
            <FaUser className="text-3xl " />
          </div>
        </div> */}
        <div className="w-[70vw] h-[80vh] flex flex-col pt-[5rem] m-auto ">
          <div className=" w-[90%] m-auto  ">
            <h2 className="text-[6rem] text-center text-[#55AD9B]  font-inter font-extrabold">
              Welcome to WizTie{" "}
            </h2>
            <p className="text-xl w-[85%] m-auto text-center">
              Your all-in-one integrated platform designed to empower students
              to turn their ideas into reality. At WizTie, we believe that every
              student has the potential to create something remarkable. Our
              mission is to provide the tools, resources, and community needed
              to help students collaborate, innovate, and showcase their
              projects to the world.
            </p>
          </div>
          <div className="w-[20rem] m-auto flex justify-center mt-[-2rem]">
            <button className="h-[3rem] px-12 text-center text-white bg-[#55AD9B] rounded-md uppercase font-semibold hover:opacity-90 hover:text-black">
              Create Now <a href=".//Maths.html"></a>
            </button>
          </div>
        </div>

        <div className="second-page">
          <div className="heading my-12">
            <h2 className="text-center text-4xl font-bold">Explore Projects</h2>
            <p className="text-xl">Select that interest you</p>
          </div>

          <div className="w-[90%] flex gap-12 flex-wrap justify-around m-auto ">
            <div className="grid-box rounded-md uppercase font-semibold relative gb-1 ">
              <img src={one} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  E-commerce Platforms
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative  gb-2">
              <img src={t2} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Mobile Applications
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-3">
              <img src={t3} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">Web Development</h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-4">
              <img src={t4} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">Game Development</h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-5">
              <img src={t5} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  AI and Machine Learning
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-6">
              <img src={t6} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">Data Science</h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-7">
              <img src={t7} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Internet of Things (IoT)
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-8">
              <img src={t8} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Blockchain and Cryptocurrency
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-9">
              <img src={t9} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">Cybersecurity</h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-10">
              <img src={t10} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Finance and FinTech
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-11">
              <img src={t11} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Robotics and Automation
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-12">
              <img src={t12} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Environmental and Sustainability Projects
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-13">
              <img src={t13} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Augmented Reality (AR) and Virtual Reality (VR)
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-14">
              <img src={t14} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Healthcare Technology
                </h4>
              </div>
            </div>
            <div className="grid-box rounded-md uppercase font-semibold relative gb-15">
              <img src={t15} alt="" className="h-[100%] w-[100%] block" />
              <div className="absolute bg-[#00000053] flex justify-center items-center overflow-hidden w-[100%] h-[100%]">
                <h4 className=" text-center absolute z-10 text-white">
                  Education Technology (EdTech)
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="offer">
          <h3>What We Offer</h3>
          <p>
            <b>Project Management: </b> Our platform simplifies the project
            management process with tools designed to help students plan,
            execute, and monitor their work efficiently. From setting milestones
            and deadlines to assigning tasks and roles, students have everything
            they need to keep their projects on track. <br /> <br />
            <b>Collaboration Tools:</b> Collaboration is at the heart of
            innovation. [Platform Name] offers a range of collaboration tools,
            including real-time chat, discussion forums, and document sharing,
            to foster teamwork and communication among students. <br /> <br />
            <b>Progress Tracking:</b> Keeping track of progress is essential for
            any successful project. Our platform provides features for tracking
            milestones, tasks, and deadlines, ensuring students stay on schedule
            and meet their goals. <br /> <br />
            <b>Resource Sharing:</b> Access to the right resources can make all
            the difference. [Platform Name] offers a resource center filled with
            guides, templates, tutorials, and more, helping students find the
            support they need to excel in their projects. <br /> <br />
            <b>Showcasing Projects:</b> We believe in celebrating student
            achievements. Our platform allows students to showcase their
            projects to a global audience, gaining recognition and feedback from
            peers, educators, and industry professionals. <br /> <br />
          </p>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
