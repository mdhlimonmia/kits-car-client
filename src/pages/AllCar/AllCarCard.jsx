const AllCarCard = ({car}) => {

    const {seller_name, toy_name, sub_category, price, available_quantity,image, rating} = car;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px] w-96"
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
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllCarCard;
