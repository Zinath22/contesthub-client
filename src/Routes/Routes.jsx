import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/AllContest/ContestDetails";

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
          path: '/contestDetails/:id',
          element: <ContestDetails></ContestDetails>,
          // loader: ({params}) => fetch(`http://localhost:5000/contest/${params.id}`)
          loader: ({params}) => fetch(`http://localhost:5000/contest/${params.id}`)
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
  ]);