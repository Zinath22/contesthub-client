import { Link } from "react-router-dom";
import page from '../../assets/404.jpg';


const ErrorPage = () => {
    return (
        <div>
             <div className="justify-center text-center">
                <div className=""><img className="w-[700px] justify-center mt-10 text-center items-center mx-auto mb-5" src={page} alt="" /></div>
                <Link  to="/"> <span className="text-xl text-green-500">Go Back to</span> <span className="text-2xl text-red-600">Home</span></Link>
            {/* <h2 className="justify-center mt-10 text-4xl text-center items-center">404 <br /> PAGE NOT FOUND</h2>
            <Link to="/">Go Back to home</Link> */}
        </div>
        </div>
    );
};

export default ErrorPage;