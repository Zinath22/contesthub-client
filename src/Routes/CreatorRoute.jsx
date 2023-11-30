import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hook/useAdmin";
import useCreator from "../Hook/useCreator";
// import UseAdmin from "../Hooks/UseAdmin";

// import UseAuth from "../Hooks/UseAuth";


const CreatorRoute = ({children}) => {
    // const [user, loading] = UseAuth();
    const { user, loading } = useContext(AuthContext);
    const  [isCreator, isCreatorLoading] = useCreator();
    const location = useLocation();

    if(loading || isCreatorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isCreator) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default CreatorRoute;