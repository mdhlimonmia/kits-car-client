import { Link } from "react-router-dom";

const AllCarCard = ({car}) => {

    const {seller_name, toy_name,_id, sub_category, price, available_quantity,image, rating} = car;

  return (
    <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[250px] lg:h-[300px] w-80 lg:w-96"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <p>Seller: {seller_name}</p>
        <p>Category: {sub_category} </p>
        <p>Available Quantity: {available_quantity} </p>
        <p>Price: ${price} </p>
        <p>Rating: {rating} </p>
        <div className="card-actions justify-end">
        <Link to={`/details/${_id}`}>  <button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllCarCard;
