import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hook/useAdmin";
// import UseAdmin from "../Hooks/UseAdmin";

// import UseAuth from "../Hooks/UseAuth";


const AdminRoute = ({children}) => {
    // const [user, loading] = UseAuth();
    const { user, loading } = useContext(AuthContext);
    const  [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;