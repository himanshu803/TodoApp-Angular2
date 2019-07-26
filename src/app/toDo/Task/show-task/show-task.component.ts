import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../shared/tasks.service";
import {TaskDetail} from "../../shared/tasks.module";

@Component({
  selector: 'show-task',
  templateUrl: 'show-task.component.html',
  styleUrls: ['show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  tasks: TaskDetail[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getAddedTasks();
  }

}
