import { Component, OnInit } from '@angular/core';
import {TaskDetail} from "../../shared/tasks.module";
import {TasksService} from "../../shared/tasks.service";

@Component({
  selector: 'update-task',
  templateUrl: 'update-task.component.html',
  styleUrls: ['update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  tasks: TaskDetail[] = [];

  settings = {
    columns: {
      task: {
        title: 'Task'
      },
      priority: {
        title: 'Priority'
      },
      status: {
        title: 'Status'
      },
      assignedTo: {
        title: 'Assigned To'
      }
    }
  };

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getAddedTasks();
  }

}
