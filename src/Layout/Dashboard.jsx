import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import useAdmin from "../Hook/useAdmin";
import useCreator from "../Hook/useCreator";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";




const Dashboard = () => {
 const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    // const isCreator = true;

    const [isCreator] = useCreator();
    // console.log(isCreator);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <ul className="menu ">
                    {
                        isAdmin &&
                         <>
                         <>Admin</>
                            <li><NavLink to="manageUser">
                                <FaUsers className="text-2xl text-white"></FaUsers>
                                Manage User</NavLink></li>
                            <li><NavLink to="manageContest">
                                <FaList className="text-2xl text-white"></FaList>
                                Manage Contest</NavLink></li>
                        </>

                    }


                    {
                    isCreator &&

                        <>
                        <>Creator</>
                            <li><NavLink to="addContest">add Contest</NavLink></li>
                            <li><NavLink to="createdContest"> My Created Contest</NavLink></li>
                            {/* <li><NavLink to="submittedContest">Submitted Contest</NavLink></li> */}
                        </>
                    }      :

                    {/* divider  */}
                   {
                    !isAdmin && !isCreator &&  <>

                    <div className="divider"></div>
                    <>{user.nmae}</>
                    <li><NavLink to="regContest">My Registered Contest</NavLink></li>
                    <li><NavLink to="myWinning"> My Winning Contest Page</NavLink></li>
                    <li><NavLink to="myProfile"> My Profile</NavLink></li>
                </>
                   }


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