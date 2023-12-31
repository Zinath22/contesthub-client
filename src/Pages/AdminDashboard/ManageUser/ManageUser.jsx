

// import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
// import { useState } from "react";


const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  // const [count, setCount] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // const numberOfPages = Math.ceil(count / itemsPerPage);
  // const pages = [...Array(numberOfPages).keys()];
  // const pages = []
  // for(let i = 0; i < numberOfPages; i++){
  //   pages.push(i);
  // }
  // console.log(pages);


  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users'
        //  , {
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem('access-token')}`
        //   }
        //  }
      );
      return res.data
    }
  })

  const handleMakeAdmin = user => {
    axiosSecure.patchForm(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleMakeCreator = user => {
    axiosSecure.patchForm(`/users/creator/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleMakeUser = user => {
    axiosSecure.patchForm(`/users/user/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleUserDelete = user => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            // console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }


  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users:{users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Creator</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>

                  {user.role === 'admin' ? 'Admin' :
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-orange-600 btn-lg ">
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>}

                </td>
                <td>

                  {user.role === 'creator' ? 'creator' :
                    <button
                      onClick={() => handleMakeCreator(user)}
                      className="btn bg-orange-600 btn-lg ">
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>}

                </td>
                <td>

                  {user.role ==='user'? 'Normal User' :
                    <button
                      onClick={() => handleMakeUser(user)}
                      className="btn bg-orange-600 btn-lg ">
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>}

                </td>
                <td>

                  <button
                    onClick={() => handleUserDelete(user)}
                    className="btn btn-ghost btn-lg ">
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>

                </td>
              </tr>)
            }



          </tbody>
        </table>
      </div>
      <div className="pagination">Pagination</div>
    </div>
  );
};

export default ManageUsers;