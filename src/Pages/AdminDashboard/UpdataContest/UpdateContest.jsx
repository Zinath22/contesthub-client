import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const UpdateContest = () => {

    const {_id, contest_name, img, tag, fee, description, instruction, prize, deadline} = useLoaderData();
    const {user} = useContext(AuthContext);
   
    const { register, handleSubmit} = useForm()
  
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
    
    
       const contestItem = {
          name : user.displayName,
          email: user.email,
          contest_name: data.contest_name,
          img: data.img,
          tag: data.tag,
          fee: data.fee,
          description: data.description,
          instruction: data.instruction,
          prize: data.prize,
          deadline: data.deadline,
          status: 'pending'
        }
    
     
    
        const contestRes = await axiosSecure.patch(`/contest/${_id}`, contestItem);
        console.log(contestRes.data);
        if (contestRes.data.modifiedCount > 0) {
        //   reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.contest_name} is update to the contest.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }

    return (
        <div>
        <SectionTitle heading={'Update Contest'}></SectionTitle>
    
        <div className="mx-5">
    
          <form onSubmit={handleSubmit(onSubmit)}>
    
    
            <div className="flex gap-5">
    
    
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contest Name</span>
    
                </label>
                <input type="text"
                defaultValue={contest_name}
                 placeholder="Contest Name"
                  {...register('contest_name', { required: true })}
                  required
                  className="input input-bordered w-full " />
    
              </div>
    
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image</span>
    
                </label>
                <input type="text"
                defaultValue={img}
                 placeholder="Image"
                  {...register('img', { required: true })}
    
                  className="input input-bordered w-full " />
    
              </div>
            </div>
            {/* types  */}
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
    
                </label>
    
                <select defaultValue={tag} {...register('tag', { required: true })}
    
                  className="select select-bordered w-full ">
                  <option disabled value="default">Select a Contest</option>
                  <option value="business">business</option>
                  <option value="medical">medical</option>
                  <option value="artical">article</option>
                  <option value="gaming">gaming</option>
    
                </select>
    
              </div>
              {/* price  */}
    
    
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Fee</span>
    
                </label>
                <input type="number"
                defaultValue={fee}
                 placeholder="Fee"
                  {...register('fee', { required: true })}
                  className="input input-bordered w-full " />
    
              </div>
    
            </div>
    
    
            <div className="flex gap-5">
    
              {/* description  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contest Description</span>
    
                </label>
                <input type="text"
                defaultValue={description}
                 placeholder="Contest Description"
                  {...register('description', { required: true })}
                  className="input input-bordered w-full " />
    
              </div>
    
              {/* instraction  */}
    
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Instruction</span>
    
                </label>
                <input type="text"
                defaultValue={instruction}
                 placeholder="Instruction"
                  {...register('instruction', { required: true })}
                  className="input input-bordered w-full " />
    
              </div>
            </div>
    
    
    
            <div className="flex gap-5">
    
              {/* prize  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Prize Money</span>
    
                </label>
                <input type="text"
                defaultValue={prize}
                placeholder="Prize Money"
                  {...register('prize', { required: true })}
                  className="input input-bordered w-full " />
    
              </div>
    
              {/* deadline */}
    
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deadline</span>
    
                </label>
                <input type="date"
                defaultValue={deadline}
                 placeholder="Deadline"
                  {...register('deadline', { required: true })}
                  className="input input-bordered w-full " />
    
              </div>
            </div>
    
    
    
            {/* <input className="" type="Update" /> */}
            <button className="btn bg-teal-500 my-4 justify-center items-center ">Update</button>
          </form>
    
        </div>
      </div>
    );
};

export default UpdateContest;