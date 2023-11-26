import { NavLink, Outlet } from "react-router-dom";
import { FaHome} from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
      <ul className="menu ">
            <li><NavLink to="/dashboard/regContest">My Registered Contest</NavLink></li>
            <li><NavLink to="/dashboard/myWinning"> My Winning Contest Page</NavLink></li>
            <li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li>
      {/* divider  */}
            <div className="divider"></div>

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