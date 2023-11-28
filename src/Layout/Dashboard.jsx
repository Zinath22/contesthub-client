import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import useAdmin from "../Hook/useAdmin";
import useCreator from "../Hook/useCreator";



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // const isCreator = false;
    
    const [isCreator] = useCreator();
    console.log(isCreator);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <ul className="menu ">
                    {
                        isAdmin && <>
                            <li><NavLink to="/dashboard/manageUser">
                                <FaUsers className="text-2xl text-white"></FaUsers>
                                Manage User</NavLink></li>
                            <li><NavLink to="/dashboard/manageContest">
                                <FaList className="text-2xl text-white"></FaList>
                                Manage Contest</NavLink></li>
                            {/* <li><NavLink to="/dashboard/updateContest">
                <FaList className="text-2xl text-white"></FaList>
                Update Contest</NavLink></li> */}


                        </>}
                    {isCreator &&
                        <>
                            <li><NavLink to="/dashboard/addContest">add Contest</NavLink></li>
                            <li><NavLink to="/dashboard/"> My Created Contest</NavLink></li>
                            {/* <li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li> */}
                        </>
                    }
                    {/* divider  */}
                    <div className="divider"></div>
                    <li><NavLink to="/dashboard/regContest">My Registered Contest</NavLink></li>
            <li><NavLink to="/dashboard/myWinning"> My Winning Contest Page</NavLink></li>
            <li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li>
                    {/* creator  */}
                    {/* {
                isCreator? <>
                  <li><NavLink to="/dashboard/addContest">Add Contest</NavLink></li> */}
                    {/* <li><NavLink to="/dashboard/myWinning"> My Winning Contest Page</NavLink></li> */}
                    {/* <li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li> */}
                    {/* </> :

                <>
                  <li><NavLink to="/dashboard/regContest">My Registered Contest</NavLink></li>
            <li><NavLink to="/dashboard/myWinning"> My Winning Contest Page</NavLink></li>
            <li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li>
                </> */}
                    {/* } */}

                    <div className="divider"></div>
                    <li>

                        <NavLink to="/">
                            <FaHome className="text-white text-2xl"></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;