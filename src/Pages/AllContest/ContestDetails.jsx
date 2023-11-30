
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import CountDown from "../../components/CountDown";


const ContestDetails = () => {
    // const [details, setDetails] = useState([]);
    // console.log(details);
   
    const details = useLoaderData();
    console.log(details);
    // const { id } = useParams()
   

    // const { _id } = detail
    // console.log(details);

    // useEffect(() => {
    //     fetch(`https://contesthub-server.vercel.app/contest/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
    // }, [])


    return (
     <div>
    
         <div className="card  my-7 card-compact mx-auto w-[80%] bg-base-100 shadow-xl">
        <img className="" src={details.img} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{details.contest_name}</h2>
         
          <h2 className="card-title">{details.participants_count}</h2>
          <p>{details.description}</p>
          <p>{details.prize}</p>
          <div className="">
          <p>{details.winner_name}</p>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
          </div>
          <p>Deadline:{details.deadline} </p>
          <p> <CountDown deadline={details.deadline}></CountDown></p>
          <p>Fee:{details.fee}</p>
          <div className="card-actions ">
            <Link to={`/payment/${details._id}`}><button className="btn bg-blue-400">Registration</button></Link>
          </div>
        </div>
      </div>
     </div>
    );
};

export default ContestDetails;