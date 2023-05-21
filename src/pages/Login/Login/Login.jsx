import { useContext } from "react";
import baby from "../../../assets/Logo/baby.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import google from "../../../assets/Logo/google.png";
import gitHub from "../../../assets/Logo/gitHub.png";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));  
  };
  const googeLoging = () => {
    googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => console.log(error));
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
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form onSubmit={handelLogin}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="my-4 text-center">
              Do not have an account yet?{" "}
                <Link className="text-orange-600 font-bold" to="/register">
                  SignUp
                </Link>{" "}
              </p>
            </form>
            <div>
              <h3 className="text-xl my-4 text-center font-bold p-5">Or login with-</h3>
              <div className="flex justify-center ">
                <img onClick={googeLoging} src={google} className="w-12 rounded-lg mr-12" alt="" />
                <img src={gitHub} className="w-12 rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
