import type { IDummyTask } from '../data/dummy-tasks';

export interface ISubmitedTaskData extends Omit<IDummyTask, 'userId' | 'id'> {
  title: string;
  summary: string;
  dueDate: string;
}
