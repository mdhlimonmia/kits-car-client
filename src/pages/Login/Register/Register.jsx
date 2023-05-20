import { Link } from "react-router-dom";
import baby from "../../../assets/Logo/baby.jpg";
import { AuthContext } from "../../../assets/providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const handelRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;

        const password = form.password.value;
        console.log(name, url, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                updateUser(name, url)
                .then(result => {
                    console.log(result);
                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content relative">
        <div className="text-center lg:text-left ">
          <img src={baby} className="rounded-lg from-orange-300" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 absolute shadow-orange-500">
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp</h1>
            </div>
            <form onSubmit={handelRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;