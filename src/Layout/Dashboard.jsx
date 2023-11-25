import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
      <ul className="menu ">
            <li><NavLink to="/dashboard/regContest">My Registered Contest</NavLink></li>
            <li><NavLink to="/dashboard/myWinning"> My Winning Contest Page</NavLink></li>
      </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;