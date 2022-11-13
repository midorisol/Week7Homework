import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo:'tasks',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    canActivate:[AuthGuard],
    loadChildren: () => import(`./task/task.module`).then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
