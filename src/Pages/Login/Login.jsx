import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const login = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
        console.log(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then((result) => {
            console.log(result.user);
            
        }).catch((err) => {
            
            console.log(err);
        });

    }


  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h2 className="text-center text-3xl my-10">Login dude</h2>
      <form onSubmit={login} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
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
            name="password"
            type="password"
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
      </form>
      <p className="text-center mt-4" > Do not have an account?<Link className="font-bold text-blue-600" to="/register">Register</Link> </p>
      </div>
     
    </div>
  );
};

export default Login;
