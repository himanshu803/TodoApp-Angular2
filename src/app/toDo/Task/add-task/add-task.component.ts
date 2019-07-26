import { Component , OnInit} from '@angular/core';
/*import { DialogService } from "ng2-bootstrap-modal";
import {AddTaskModalComponent} from '../../toDoModals/add-task-modal/add-task-modal.component'*/
import {TaskDetail} from "../../shared/tasks.module";
import {TasksService} from "../../shared/tasks.service";

@Component({
  selector: 'add-task',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  tasks: TaskDetail[] = [];

  constructor( private tasksService: TasksService) {}

  /*showAddTaskModal() {
    this.dialogService.addDialog(AddTaskModalComponent, {
      templateUrl: '../../toDoModals/add-task-modal/add-task-modal.component.html'
    })
  }*/

  AddTask( task, priority, status, assignedTo ) {
    if (task == []) {
      alert('Task is empty!');
      return;
    }
    else if (assignedTo == []){
      alert('Assigned to is empty!');
      return;
    }
    else {
      this.tasks.push({task, priority, status, assignedTo});
    }
  }

  ngOnInit() {
    this.tasks = this.tasksService.getAddedTasks();
  }
}
