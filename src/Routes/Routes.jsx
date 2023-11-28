import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/AllContest/ContestDetails";
import Payment from "../Pages/AllContest/Payment";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import RegContest from "../Pages/Dashboard/RegContest/RegContest";
import MyWinning from "../Pages/Dashboard/MyWinning/MyWinning";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import ManageUser from "../Pages/AdminDashboard/ManageUser/ManageUser";
import ManageContest from "../Pages/AdminDashboard/ManageContest/ManageContest";
import AddContest from "../Pages/CreatorDashboard/AddContest/AddContest";
import UpdateContest from "../Pages/AdminDashboard/UpdataContest/UpdateContest";
import Upcoming from "../components/Upcoming/Upcoming";
import CreatedContest from "../Pages/CreatorDashboard/CreatedContest/CreatedContest";
import ContestSubmitted from "../Pages/CreatorDashboard/ContestSubmitted/ContestSubmitted";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
          path: '/allContest',
          element: <AllContest></AllContest>
        },
        {
          path: '/upcomingContest',
          element: <Upcoming></Upcoming>
        },
        {
          path: '/contestDetails/:id',
          element: <PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>,
          // loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
        },
        {
          path: '/payment/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'regContest',
          element: <RegContest></RegContest>
        },
        {
          path: 'myWinning',
          element: <MyWinning></MyWinning>
        },
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },

        // admin routes 
       
        {
          path: 'manageUser',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'manageContest',
          element: <ManageContest></ManageContest>
        },

        {
          path: 'updateContest/:id',
          element: <UpdateContest></UpdateContest>,
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
        },

        // creator 
        {
          path: 'addContest',
          element: <AddContest></AddContest>
        },
        {
          path: 'createdContest',
          element: <CreatedContest></CreatedContest>
        },
        {
          path: 'submittedContest',
          element: <ContestSubmitted></ContestSubmitted>
        }
      ]
    }
  ]);