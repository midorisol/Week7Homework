import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskPipe } from './task.pipe';
import {TaskRoutingModule} from "./task-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    NewTaskComponent,
    TaskPipe
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
