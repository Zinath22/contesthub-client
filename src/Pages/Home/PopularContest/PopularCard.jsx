
import { Link } from "react-router-dom";


const PopularCard = ({item}) => {
    const {_id, contest_name, img,participants_count, description,category } = item;

   

    return (
        <div>
            
            <div className="card card-compact  w-96 my-7 bg-base-100 shadow-xl">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-teal-600">{contest_name}</h2>
    <h2 className="card-title text-teal-600">{participants_count}</h2>
    <p className="text-teal-600">{description}</p>
    <div className="card-actions">
     <Link to={`/contestDetails/${_id}`}> <button className="btn text-black bg-teal-600">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;