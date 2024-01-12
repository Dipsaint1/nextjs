import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from 'next/link';

const SingleTaskPage = async ({ params : { id } }) => {
  const task = await getTask(id);
  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'> back to tasks </Link>
      </div>
      <EditForm task={task} />
    </>
  );
}

export default SingleTaskPage;