import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../models/task.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  name: string = '';
  description:string = '';


  constructor(private  taskService: TaskService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveTask() {
  this.taskService.addTask(new Task(this.name, this.description))
    this.back();
  }

  back() {
  this.router.navigateByUrl('/tasks');
  }
}
