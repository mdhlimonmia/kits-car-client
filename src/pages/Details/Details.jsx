import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
     const details = useLoaderData()
     const navigate =useNavigate()

     const handleRemoveItem = (id) => {
        const deleteConfirm = window.confirm(
          `Are you sure? You want to delete this item.`
        );
        if (deleteConfirm) {
          fetch(`http://localhost:5000/car/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                // toast.success("Review deleted succesfully !!");
                 alert('success')
                 navigate('/mycars')
                 console.log(data);
              }
            });
        }
      };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
       <Link  to={`/update/${details._id}`} >    <button className="btn btn-primary">Update</button></Link>
          <button  onClick={()=>handleRemoveItem(details._id)} className="btn btn-secondary">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
