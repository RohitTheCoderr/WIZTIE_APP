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
import MainProfile from './pages/mainProfilePage/MainProfile.jsx';
import UsersPage from './components/mainProfileComponents/usersPage/UsersPage.jsx';
import UserAccount from './components/mainProfileComponents/userAccount/UserAccount.jsx';
import UploadDataProject from './components/mainProfileComponents/UploadProjectdata/UploadDataProject.jsx';
import UserProjectForm from './components/UserProjectForm/UserProjectForm.jsx';
import ChatWithCommections from './components/mainProfileComponents/ChatWithMyConnection/ChatWithCommections.jsx';
import ChatWindow from './components/chatWindow/Chatwindow.jsx';
import EditProfile from './components/mainProfileComponents/EditProfile/EditProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      // {
      //   path: "/usersPage",
      //   element: <UsersPage />
      // },
      {
        path:"/main_profile",
        element:<MainProfile/>,
        children:[
          {
            path:"/main_profile/userspage",
            element:<UsersPage/>
          },
          {
            path:"/main_profile/user_account",
            element:<UserAccount/>,
            children:[
              {
              path:"/main_profile/user_account",
              element:<UploadDataProject/>
              },
              {
                path:"/main_profile/user_account/user_projectForm",
                element:<UserProjectForm/>
              }
            ]
          },
          {
            path:"/main_profile/Chat_with_Commections",
            element:<ChatWithCommections/>,
          },
          {
            path:"/main_profile/edit_profile",
            element:<EditProfile/>,
          }
        ]
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
    ],
    // errorElement: <SomethingWentWrong />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
