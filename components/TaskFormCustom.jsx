"use client"
import { useFormStatus } from "react-dom";
import { createTaskCustom } from "@/utils/actions";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return(
    <button type='submit' className='btn btn-primary join-item' disabled={pending}> 
      { pending ? 'Submitting task...' : 'Create task' } 
    </button>
  );
}

const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
      <div className='join w-full'>
        <input type='text' className='input input-bordered join-item w-full' placeholder='type here' name='content' required/>
        <SubmitBtn/>
      </div>
    </form>
  );
};
export default TaskFormCustom;