import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddContest = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
  {...register('name')}
   className="input input-bordered w-full " />
  
</div>
 
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Image</span>
    
  </label>
  <input type="text" placeholder="Image"
  {...register('image')}
   className="input input-bordered w-full " />
  
</div>
</div>
{/* types  */}
<div className="flex gap-5">
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Type</span>
    
  </label>
 
  <select {...register('type')}
      className="select select-bordered w-full ">
  <option disabled selected>Select a Contest</option>
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
  {...register('fee')}
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
  {...register('description')}
   className="input input-bordered w-full " />
  
</div>

{/* instraction  */}
 
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Instruction</span>
    
  </label>
  <input type="text" placeholder="Instruction"
  {...register('instruction')}
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
  {...register('prize')}
   className="input input-bordered w-full " />
  
</div>

{/* deadline */}
 
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Deadline</span>
    
  </label>
  <input type="text" placeholder="Deadline"
  {...register('deadline')}
   className="input input-bordered w-full " />
  
</div>
</div>
      


      <input type="submit" />
    </form>

            </div>
        </div>
    );
};

export default AddContest;