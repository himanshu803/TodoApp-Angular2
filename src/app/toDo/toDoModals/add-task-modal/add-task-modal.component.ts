import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface AddTaskModel {
  title:string;
  message:string;
}

@Component({
  selector: 'addTaskModal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent extends DialogComponent<AddTaskModel, boolean> implements AddTaskModel{
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.result = true;
    this.close();
  }
}
