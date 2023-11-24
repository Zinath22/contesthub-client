
import { Link } from "react-router-dom";


const PopularCard = ({item}) => {
    const {_id, contest_name, img,participants_count, description,category } = item;

   

    return (
        <div>
            
            <div className="card card-compact w-96 my-7 bg-base-100 shadow-xl">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{contest_name}</h2>
    <h2 className="card-title">{participants_count}</h2>
    <p>{description}</p>
    <div className="card-actions">
     <Link to={`/contestDetails/${_id}`}> <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;