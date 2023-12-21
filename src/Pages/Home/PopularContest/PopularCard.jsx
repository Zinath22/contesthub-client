

import { useState } from "react";
import { Link } from "react-router-dom";


const PopularCard = ({ item }) => {
  const { _id, contest_name, img, participants_count, description, category } = item;
  //  const [seeMore , setSeeMore] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggle = () => {
    setShowFullDescription(!showFullDescription);
  };



  return (
    <div>

      <div className="card card-compact space-y-3 my-7 rounded-md shadow-xl">
        <img className="w-full " src={img} alt="" />
        <div className="card-body">
          <h2 className="card-title text-2xl " data-aos='flip-left'>{contest_name}</h2>
          <h2 className="card-title  " data-aos='flip-left'>Participants: {participants_count}</h2>


          <p className="text-gray-500 text-lg">
            {showFullDescription ? (
              <span className="">
                {description}
                <button className="ml-4 flex  text-green-600 text-sm underline" onClick={handleToggle}>See less</button>
              </span>
            ) : (
              <span>
                {description.slice(0, 30)}
                {description.length > 30 && <button className="ml-2 text-green-600 text-sm underline" onClick={handleToggle}>See more</button>}
              </span>
            )}
          </p>

          {/* <div className="card-actions">
     <Link to={`/popularDetails/${_id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
    </div>  */}
        </div>
      </div>
    </div>
  );
};

export default PopularCard;