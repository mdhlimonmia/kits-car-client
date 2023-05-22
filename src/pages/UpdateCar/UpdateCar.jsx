import { toast } from "react-hot-toast";
import { useLoaderData} from "react-router-dom";


const UpdateCar = () => {

    const carDetail = useLoaderData()
   
// console.log(carDetail);

    const handleUpdate = event =>{
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

        const updateCar = {
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

        fetch(`https://kits-car-server.vercel.app/${carDetail._id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updateCar)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            toast.success("Successfully Updated")
        })
    }


    return (
        <div>
      <h2 className="text-center text-3xl">Book Service: </h2>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Car Name</span>
            </label>
            <input type="text" name="name" defaultValue={carDetail?.toy_name} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture Url</span>
            </label>
            <input type="text" name="url" defaultValue={carDetail?.image} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="seller" defaultValue={carDetail?.seller_name} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" >Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={carDetail?.seller_email}
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
              defaultValue={carDetail?.sub_category}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" defaultValue={carDetail?.price} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" defaultValue={carDetail?.rating} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={carDetail?.available_quantity}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input type="text" name="details" defaultValue={carDetail?.description} className="input input-bordered" />
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

export default UpdateCar;