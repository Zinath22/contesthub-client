// Import your axios instance for public requests

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext); // Assuming you have a UserContext
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], } = useQuery({
    queryKey: ['updateuser'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data
    }

  });
//  console.log('uu', allUsers);
 const filterUser = allUsers.find(item => item.email === user?.email)


  const { data: payments = [], } = useQuery({
    queryKey: ['paymensts'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payments');
      return res.data
    }

  });

  // stats 
  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
        const res = await axiosSecure.get('/order-stats')
        return res.data;
    }
});

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  
 console.log('pp', payments);
 const myContest = allUsers.filter(item => item.email === user?.email)
 console.log('total',myContest);
  const onSubmit = async (data) => {
    try {
      await updateUserProfile(data.name, data.photoURL);
      const userInfo = {
        name: data.name,
        email: user.email, // Assuming you're not allowing the user to update their email
        role: 'user',
        photo: data.photoURL,
      };

      const response = await axiosPublic.patch(`/users/${filterUser._id}`, userInfo);

      if (response.data.updated) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User updated successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect the user to a different page after a successful update
        navigate('/dashboard'); // Change '/dashboard' to your desired route
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update user.',
        });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div>
<div>
  <SectionTitle heading={"Parcipitedt COntest"}></SectionTitle>
  <h1 className="text-2xl justify-center items-center text-center text-teal-500">Total number of contest percipatating {myContest.length}</h1>
          
  <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
</div>

<SectionTitle heading={"Update"}></SectionTitle>
      <div className="lg:w-1/2 w-full my-10 font-bold mx-auto py-10 px-12 bg-gradient-to-r from-teal-500 to-purple-500">
        {/* <h2 className="text-2xl text-center mb-4">Register</h2> */}
        <p className="mb-4 text-lg text-center">Update your account.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user.displayName}
              placeholder="name"
              {...register('name', { required: true })}
              name="name"
              className="input input-bordered"
            />
            {errors.name && <span className="text-red-600">Name is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              defaultValue={user.photoURL}
              placeholder="Photo URL"
              {...register('photoURL', { required: true })}
              className="input input-bordered"
            />
            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
          </div>

          {/* Additional form controls can be added here */}

          <div className="mt-5">
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-center rounded text-white">
              Update Profile
            </button>
            <p className="text-center mt-3">
              Already Have an Account?{' '}
              <Link to="/login">
                <span className="btn-link font-medium text-white">Login</span>
              </Link>
            </p>
          </div>
        </form>


      </div>
    </div>
  );
};

export default MyProfile;
