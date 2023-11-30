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

import ManageContest from "../Pages/AdminDashboard/ManageContest/ManageContest";
import AddContest from "../Pages/CreatorDashboard/AddContest/AddContest";
import UpdateContest from "../Pages/AdminDashboard/UpdataContest/UpdateContest";
import Upcoming from "../components/Upcoming/Upcoming";
import CreatedContest from "../Pages/CreatorDashboard/CreatedContest/CreatedContest";
import ContestSubmitted from "../Pages/CreatorDashboard/ContestSubmitted/ContestSubmitted";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/AdminDashboard/ManageUser/ManageUser";
import SubmittedContest from "../Pages/SubmittedContest";
import CreatorRoute from "./CreatorRoute";
import PopularDetail from "../Pages/Home/PopularContest/PopularDetail";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: '/popularDetails/:id',
          element: <PrivateRoute><PopularDetail></PopularDetail></PrivateRoute>,
          // loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
        },
        
        {
          path: 'payment/:id',
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
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'manageContest',
          element: <AdminRoute><ManageContest></ManageContest></AdminRoute>
        },

        {
          path: 'updateContest/:id',
          element: <AdminRoute><UpdateContest></UpdateContest></AdminRoute>,
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/contest/${params.id}`)
        },

        // creator 
        {
          path: 'addContest',
          element: <AddContest></AddContest>
        },
        {
          path: 'createdContest',
          element:<CreatorRoute> <CreatedContest></CreatedContest></CreatorRoute>
        },
        {
          path: 'submittedContest',
          element: <CreatorRoute><SubmittedContest></SubmittedContest></CreatorRoute> ,
          
        },
        {
          path: 'submittedContest/:id',
          element: <ContestSubmitted></ContestSubmitted> ,
          loader: ({params}) => fetch(`https://contesthub-server.vercel.app/payments/${params.id}`)
        }
      ]
    }
  ]);