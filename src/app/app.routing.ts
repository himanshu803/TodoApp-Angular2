import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./UserApp/user/user.component";
import {SupportComponent} from "./UserApp/support/support.component";
import {MarketComponent} from "./CollectionApp/market/market.component";
import {CollectionComponent} from "./CollectionApp/collection/collection.component";
import {TodoComponent} from "./toDo/todo/todo.component";
import {AddTaskComponent} from "./toDo/Task/add-task/add-task.component";
import {ShowTaskComponent} from "./toDo/Task/show-task/show-task.component";
import {UpdateTaskComponent} from "./toDo/Task/update-task/update-task.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'market', component: MarketComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'user', component: UserComponent },
  { path: 'support', component: SupportComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'addTask', component: AddTaskComponent},
  { path: 'showTask', component: ShowTaskComponent},
  { path: 'updateTask', component: UpdateTaskComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
