import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
const Login = () => {
    const {signInGoogle,setUser,signIn,error,setError} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin =(e) =>{
         e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signIn(email,password).then(result =>{
            const user = result.user;
            console.log(user);
            navigate(`${location.state ? location.state : '/'}`)
        }).catch(error =>{
           setError(error.code);
        })
    }
   

    const handleGoogleLogin = () =>{
        signInGoogle(provider).then(result =>{
            setUser(result.user);
        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
                 <div className='flex  justify-center items-center min-h-screen my-5'>
                    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
            <div className="card-body">
                <h1 className='text-2xl text-center font-semibold py-3'>Login Your Account</h1>
                <form onSubmit={handleLogin} className="fieldset"
                >
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input " placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password"name='password'  className="input" placeholder="Password" />
                    {
                    error && <p className='text-red-500 text-sm'>{error}</p>
                }
                    <div ><a className="link link-hover">Forgot password?</a>
                    {/* <ToastContainer></ToastContainer> */}
                    </div>

                    <button type='submit' className="btn btn-neutral mt-4">Login
                    </button>
                    
                    <h4 className='my-3 text-center p-2'>Don't Have An Account ? <Link to='/auth/register' className='text-blue-600 underline'>Register</Link></h4>

                    <div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>

                    	<div className="my-6 space-y-4">
		<button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
        
		</button>
	</div>
    
                </form>
                
            </div>
        </div>

        </div>
    );
};

export default Login;