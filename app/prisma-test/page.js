import PrismaTestService from '@/services/api/PrismaTestService';

const prismaHandlers = async () => {
  await PrismaTestService.createTask('Okay');
  const allTasks = PrismaTestService.getAllTasks();
  return allTasks;
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (  
    <div></div>
  )
}

export default PrismaExample;