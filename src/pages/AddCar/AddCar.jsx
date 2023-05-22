import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const AddCar = () => {
  const {user} = useContext(AuthContext)

    const handleAddCar = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newCar = {
            toy_name: name,
            sub_category: category,
            price: price,
            available_quantity: quantity,
            seller_name: seller,
            seller_email: email,
            rating: rating,
            image: url,
            description: details
        }

        fetch('https://kits-car-server.vercel.app/addcar', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                toast.success('Successfully add Car');
            }
        })
    }


  return (
    <div>
      <h2 className="text-center text-3xl mt-8">Add Car</h2>
      <form onSubmit={handleAddCar}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Car Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture Url</span>
            </label>
            <input type="text" name="url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="seller" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}

              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input type="text" name="details" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Car"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default AddCar;
