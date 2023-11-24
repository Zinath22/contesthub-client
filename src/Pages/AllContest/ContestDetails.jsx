
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const ContestDetails = () => {
    // const [details, setDetails] = useState([]);
    // console.log(details);

    const details = useLoaderData();
    console.log(details);
    // const { id } = useParams()
   

    // const { _id } = detail
    // console.log(details);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/contest/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
    // }, [])


    return (
        <div className="card my-7 card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{details.contest_name}</h2>
          <p>{details.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ContestDetails;