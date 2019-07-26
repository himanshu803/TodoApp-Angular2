import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './UserApp/user/user.component';
import {SupportComponent} from "./UserApp/support/support.component";
import { MarketComponent } from './CollectionApp/market/market.component';
import { CollectionComponent } from './CollectionApp/collection/collection.component';
import { HeaderComponent } from './CollectionApp/header.component';
import {CollectableService} from "./CollectionApp/shared/collectable.service";
import { TodoComponent } from './toDo/todo/todo.component';
import { TodoHeaderComponent } from './toDo/todo-header.component';
import { AddTaskComponent } from './toDo/Task/add-task/add-task.component';
import { ShowTaskComponent } from './toDo/Task/show-task/show-task.component';
import { UpdateTaskComponent } from './toDo/Task/update-task/update-task.component';
import {CommonModule} from "@angular/common";
import { AddTaskModalComponent } from './toDo/toDoModals/add-task-modal/add-task-modal.component';
import {TasksService} from "./toDo/shared/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SupportComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent,
    TodoComponent,
    TodoHeaderComponent,
    AddTaskComponent,
    ShowTaskComponent,
    UpdateTaskComponent,
    AddTaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CommonModule,
    BootstrapModalModule,
    Ng2SmartTableModule
  ],
  providers: [CollectableService, TasksService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddTaskModalComponent
  ]
})
export class AppModule { }
