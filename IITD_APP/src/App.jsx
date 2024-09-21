// import TestAPP from "@/__TEST__/TestAPP"
import Header from "./layouts/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./layouts/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileForm from "./components/UserProfileForm/UserProfileForm";
// import DataForm from "./components/UserInfoForm/UserInfoForm";
// import UserInfoCard from "./components/UserInfoCard/UserInfoCard";
// import SideProfile from "./components/sideProfile/SideProfile";
// import SideMenu from "./layouts/SideMenu/SideMenu";
// import SideNavbar from "./layouts/SideNavbar/SideNavbar";
// import ProjectTable from "./components/UserDataTable/UserTable";
// import TableComponent from "./components/UserDataTable/UserTable";
// import Connection from "./components/UserConnection/Connection";
// import UsersProfile from "./components/UsersProfile/userProfile";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
