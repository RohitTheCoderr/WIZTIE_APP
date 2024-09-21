import { createRoot } from 'react-dom/client'
import { StrictMode } from "react"
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './pages/Aboutpage/About.jsx';
import Contact from './pages/contactpage/Contact.jsx';
import SignupPage from './pages/SignUpPage/SignupPage.jsx';
import LogInPage from './pages/LoginPage/LogInPage.jsx';
import Home from './pages/HomePage/Home.jsx';
import Forget_and_change_password from './pages/Forget_password/ForgetAndChangePassword.jsx';
import UpdateAdd from './pages/Update_AddEmailphonenumber/UpdateAdd.jsx';
import UserAccount from './pages/userAccount/UserAccount.jsx';
import CreateAddress from './components/createAddress/CreateAddress.jsx';
import UsersPage from './pages/usersPage/UsersPage.jsx';
import ChatWindow from './components/chatWindow/Chatwindow.jsx';
import UploadDataProject from './components/uploadMainDiv/UploadProjectdata/UploadDataProject.jsx';
import DataForm from './components/UserProjectForm/UserProjectForm.jsx';
import Connection from './components/UserConnection/Connection.jsx';
import UserProfileForm from './components/UserProfileForm/UserProfileForm.jsx';
import MyConnections from './components/myConnections/MyConnections.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/usersPage",
        element: <UsersPage />
      },

      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/chatwindow",
        element: <ChatWindow />,
      },
      {
        path: "/forgetpassword",
        element: <Forget_and_change_password />
      },
      {
        path: "/updateAdd",
        element: <UpdateAdd />
      },
      
      {
        path: "/useraccount",
        element: <UserAccount />,
        children: [
          {
            path: "/useraccount",
            element: <UploadDataProject />,
            // children:[
            //   {
            //     path:"/useraccount/uploaddatadroject/dataorm",
            //     element:<DataForm/>
            //   }
            // ]
          },
          {
            path: "/useraccount/dataform",
            element: <DataForm />
          },
          {
            path: "/useraccount/editprofile",
            element: <UserProfileForm />
          },
          {
            path: "/useraccount/myconnection",
            element: <MyConnections />
          },
          {
            path: "/useraccount/users",
            element: <Connection />
          },
          {
            path: "/useraccount/createaddress",
            element: <CreateAddress />
          },

        ]
      }
    ],
    // errorElement: <SomethingWentWrong />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
