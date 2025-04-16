import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (

        <div className=" card w-full flex items-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl gap-4 p-4">
                <div className=" text-center">
                    <h1 className=" text-2xl font-bold">Sign In</h1>
                    <p>Enter your email and password</p>
                </div>
                <hr />
                <label className=" flex items-center gap-1 justify-center btn btn-accent btn-outline font-bold text-[15px]">
                    <h1><FaGoogle></FaGoogle></h1>
                    <h1>  Sign in with Google</h1>

                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" className="grow" placeholder="........." />
                </label>
                <label>
                    <Link to={'/'}>
                        <button className="btn btn-success btn-outline w-full">Sign In</button>
                    </Link>
                </label>
                <hr />
                <label className=" text-center">
                    <h1 >Not registered yet?  <Link to={'/signUp'} className=" ml-4 text-teal-500 font-bold">Create an Account</Link></h1>
                </label>
            </div>
        </div>






    );
};

export default Login;