import { Injectable } from '@angular/core';
import {Task} from "./models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private  _tasks: Task[] = [];

  constructor() { }

  get tasks() {
    return this._tasks.filter(task => !task.isDone);
  }

  get doneTasks() {
    return this._tasks.filter(task => task.isDone);
  }

  addTask(task: Task) {
  this._tasks.push(task);
  }

  markAsDone(task: Task) {
  this._tasks[this._tasks.indexOf(task)].isDone = true;
  }
}
