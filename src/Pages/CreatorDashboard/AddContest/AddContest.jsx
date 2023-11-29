import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import useAxiosPublic from "../../../Hook/useAxiosPublic/useAxiosPublic";

const AddContest = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm()
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);






    const contestItem = {
      name: user.displayName,
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



    const contestRes = await axiosSecure.post('/contest', contestItem);
    console.log(contestRes.data);
    if (contestRes.data.insertedId) {
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.contest_name} is added to the contest.`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }




  return (
    <div>
      <SectionTitle heading={'Add Contest'}></SectionTitle>

      <div className="mx-5">

        <form onSubmit={handleSubmit(onSubmit)}>


          <div className="flex gap-5">


            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Contest Name</span>

              </label>
              <input type="text" placeholder="Contest Name"
                {...register('contest_name', { required: true })}
                required
                className="input input-bordered w-full " />

            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>

              </label>
              <input type="text" placeholder="Image"
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

              <select defaultValue="default" {...register('tag', { required: true })}

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
              <input type="number" placeholder="Fee"
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
              <input type="text" placeholder="Contest Description"
                {...register('description', { required: true })}
                className="input input-bordered w-full " />

            </div>

            {/* instraction  */}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instruction</span>

              </label>
              <input type="text" placeholder="Instruction"
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
              <input type="text" placeholder="Prize Money"
                {...register('prize', { required: true })}
                className="input input-bordered w-full " />

            </div>

            {/* deadline */}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deadline</span>

              </label>
              <input type="date" placeholder="Deadline"
                {...register('deadline', { required: true })}
                className="input input-bordered w-full " />

            </div>
          </div>



          <button className="btn bg-teal-500 my-4 justify-center items-center ">Add Contest</button>
        </form>

      </div>
    </div>
  );
};

export default AddContest;