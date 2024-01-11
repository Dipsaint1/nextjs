import prisma from '../../utils/db';

export default class TaskService{
  static createTask = async (content) => {
    await prisma.task.create({
      data: {
        content,
      },
    });
  }

  static getAllTasks = async () => {
    const allTasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return allTasks;
  }
}