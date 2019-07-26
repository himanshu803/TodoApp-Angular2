import { Injectable } from '@angular/core';
import {TaskDetail} from "./tasks.module";

@Injectable()
export class TasksService {
  private tasks: TaskDetail[] = [
    {task: 'Angular2', priority: 'High', status: 'In progress', assignedTo: 'Himanshu'},
    {task: 'Java Script', priority: 'Medium', status: 'Completed', assignedTo: 'Shubham'},
    {task: 'HTML5', priority: 'Low', status: 'Pending', assignedTo: 'Pankaj'},
    {task: 'Bootstrap', priority: 'High', status: 'In progress', assignedTo: 'Deepak'}
  ]

  getAddedTasks() {
    return this.tasks;
  }

}
