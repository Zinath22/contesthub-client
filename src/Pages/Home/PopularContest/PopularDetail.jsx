import { Link, useLoaderData } from "react-router-dom";
import CountDown from "../../../components/CountDown";


const PopularDetail = () => {
    const details = useLoaderData();
    return (
        <div>
               <div className="card  my-7 card-compact mx-auto w-[80%] bg-base-100 shadow-xl">
        <img className="" src={details.img} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{details.contest_name}</h2>
         
          <h2 className="card-title text-teal-400">{details.participants_count}</h2>
          <p className="text-teal-400">{details.description}</p>
          <p className="text-teal-400">Prize:{details.prize}</p>
          <div className="">
          <p className="text-teal-400">{details.winner_name}</p>
          {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" /> */}
          </div>
          <p>Deadline:{details.deadline} </p>
          <p className="text-teal-400"> <CountDown deadline={details.deadline}></CountDown></p>
          <p className="text-teal-400">Fee:{details.fee}</p>
          <div className="card-actions ">
            <Link to={`/payment/${details._id}`}><button className="btn bg-blue-400">Registration</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PopularDetail;