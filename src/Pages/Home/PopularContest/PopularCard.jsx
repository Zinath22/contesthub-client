
import { useState } from "react";
import { Link } from "react-router-dom";


const PopularCard = ({item}) => {
    const {_id, contest_name, img,participants_count, description,category } = item;
//  const [seeMore , setSeeMore] = useState(false);
   

    return (
        <div>
            
            <div className="card card-compact  w-96 my-7 bg-gray-200 shadow-xl">
  <figure><img className="w-full h-[180px]" src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-teal-600">{contest_name}</h2>
    <h2 className="card-title text-teal-600">{participants_count}</h2>
    {/* <p className="text-teal-600">{description}</p> */}
    {
      description.length > 10 ?
      <p className="text-teal-500">{description.slice(0,10)}
      
       <button>see more</button>
      </p> :
      <p>{description}</p>
    }
    

    <div className="card-actions">
     <Link to={`/contestDetails/${_id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;