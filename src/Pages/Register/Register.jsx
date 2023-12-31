
import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";

// import app from "../../firebase/firebase.config";



const Register = () => {


    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const { createUser,logOut, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => { 
                      //  create user entry in the database 
                      const userInfo = {
                        name: data.name,
                        email: data.email,
                        role: 'user',
                        // bestCreator: true,
                      photo: data.photoURL
                        
                      }
                axiosPublic.post('/users',userInfo)
                .then(res => {
                  if(res.data.insertedId){
                      reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                  }
                })
                       

                        logOut()
                        .then(() => {
                            // Log out success
                        })
                        .catch(error => {
                            console.error(error);
                        });
                    navigate(location?.state ? location.state : '/login')
                })
                        // navigate('/login');

                    // })

                   
                    .catch(error => console.log(error))
            })
    };

  
   
    // bg-gradient-to-r from-purple-500 to-pink-500
  
    return (
      <div>
        {/* <Helmet><title>Bistro Boss | SignUp</title></Helmet> */}
        {/* <Helmet><title>Contest | Register</title></Helmet> */}
        <div className="lg:w-1/2 w-full  my-10  font-bold mx-auto  py-10 px-12 bg-white ">
        <h2 className="text-2xl text-center mb-4">Register</h2>
        <p className="mb-4 text-lg text-center">
                             Create your account.
                         </p>
            
            
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered border-teal-400" />
  
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered border-teal-400" />
  
                  {errors.photoURL && <span className="text-red-600">Photo url is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered border-teal-400" />
                  {errors.email && <span className="text-red-600">email is required</span>}
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} className="input input-bordered border-teal-400" />
  
                  {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
  
                  {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less 20 character</span>}
  
                  {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 character</span>}
  
                  {errors.password?.type === 'pattern' && <span className="text-red-600">password must have uppercase lower one upper character</span>}
  
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>
                {/* <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value='sign Up' />
                 
                </div> */}

                <div className="mt-5">
                                 <button className="w-full bg-gradient-to-r  from-teal-500 to-purple-300 py-3 text-center rounded text-white">Register Now</button>
                                 <p className="text-center mt-3">Already Have an Account? <Link to="/login">
                                     <span className="btn-link font-medium text-teal-500">Login</span>
                                 </Link>
                                 </p>
                             </div>
              </form>
              
              {/* <div className="space-y-3">
              <button onClick={handleGoogleLogin}
                 className=" btn-outline btn w-full bg-gradient-to-r  from-pink-500 to-purple-500  py-3 text-center rounded text-white" >
                    <FaGoogle></FaGoogle>
                  Login In With Googleee</button>
              </div> */}
            </div>
          
        </div>
        
    
    );
  };

export default Register;