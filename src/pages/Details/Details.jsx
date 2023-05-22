import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const navigate = useNavigate();
  const {
    seller_name,
    toy_name,
    sub_category,
    price,
    available_quantity,
    image,
    seller_email,
    rating,
    description,
  } = details;
  const handleRemoveItem = (id) => {
    const deleteConfirm = window.confirm(
      `Are you sure? You want to delete this item.`
    );
    if (deleteConfirm) {
      fetch(`https://kits-car-server.vercel.app/car/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // toast.success("Review deleted succesfully !!");
            alert("success");
            navigate("/mycars");
            // console.log(data);
          }
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-2xl rounded-lg shadow-2xl" />
        <div className="ml-11">
          <div className="text-xl space-y-5">
          <h1 className="text-5xl font-bold">Car Name: {toy_name}</h1>
          <p className="py-1"> Details: {description}</p>
          <p className="py-1"> Category: {sub_category}</p>
          <p className="py-1"> Seller Name: {seller_name}</p>
          <p className="py-1"> Seller Email: {seller_email}</p>
          <p className="py-1"> Available Quantity: {available_quantity}</p>
          <p className="py-1"> Price: ${price}</p>
          <p className="py-1"> Rating: {rating}</p>
          </div>
          {seller_email == user?.email && (
            <>
              {" "}
              <Link to={`/update/${details._id}`}>
                {" "}
                <button className="btn btn-primary mr-10 ">Update</button>
              </Link>
              <button
                onClick={() => handleRemoveItem(details._id)}
                className="btn btn-secondary"
              >
                delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
