import { Outlet} from "react-router-dom";

import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";



const MainLayout = () => {
    // const location = useLocation()
    // console.log(location);
    // const noHeaderFooter = location.pathname.includes('contestDetails/:id') 
    // console.log(noHeaderFooter);
    // location.pathname.includes('/signUp')

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;