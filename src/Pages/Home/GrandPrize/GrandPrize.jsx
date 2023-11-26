import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import prizeimg from "../../../assets/matepad-11-5.jpg";
import './Grand.css';
import { Link } from "react-router-dom";

const GrandPrize = () => {
    return (
        <div className="grand-item text-white">
            <SectionTitle  heading={'Grand Prize'}></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 bg-opacity-60 items-center pb-20 pt-12 px-36">
       <div>
          <img src={prizeimg} alt="" />
       </div>
       <div className="ml-10">
        <p className="">Participate Our Contest </p>
        <p>From Longman Dictionary of Contemporary English first prize/placethe prize that is given to the best person or thing in a competitionwin/take first prize She won first prize in a painting competition.</p>
       <Link to={'/allContest'}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Register</button></Link>
       </div>
            </div>
            
        </div>
    );
};

export default GrandPrize;