"use client"
import { useFormStatus, useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return(
    <button type='submit' className='btn btn-primary join-item' disabled={pending}> 
      { pending ? 'Submitting task...' : 'Create task' } 
    </button>
  );
}

const initialState = { message: null };

// Error checking in forms
const TaskFormCustom = () => {
  const [ formState, formAction ] = useFormState(createTaskCustom, initialState);

  // useEffect(() => {
  //   if(formState?.message) {
  //     setTimeout(() => {
  //       formAction.reset();
  //     }, 3000);
  //   }
  //   return () => {
  //     formAction.reset();
  //   } 
  //   // eslint-disable-next-line react-hooks/exhaustive-deps

  // }, []);
  
  useEffect(() => {
    if(formState?.message === 'error' ){
      toast.error('There was an error!');
      return;
    } if(formState.message === 'success'){
      toast.success('Task created!');
    }
  }, [formState]);
  
  return (
    <form action={formAction}>
      {/* { formState?.message ? <p className="mb-2">{formState?.message}</p> : null } */}
      <div className='join w-full'>
        <input type='text' className='input input-bordered join-item w-full' placeholder='type here' name='content' required/>
        <SubmitBtn/>
      </div>
    </form>
  );
};
export default TaskFormCustom;