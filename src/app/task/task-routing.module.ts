import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./task-list/task-list.component";
import {NewCommandModule} from "@angular/cli/src/commands/new/cli";
import {NewTaskComponent} from "./new-task/new-task.component";

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'create',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
