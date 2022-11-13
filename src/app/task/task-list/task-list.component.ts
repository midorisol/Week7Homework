import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private  taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  getTasks() {
    return this.taskService.tasks;
  }

  getDoneTasks() {
    return this.taskService.doneTasks;
  }

  navigateToTaskCreate() {
    this.router.navigateByUrl('tasks/create');
  }

}
