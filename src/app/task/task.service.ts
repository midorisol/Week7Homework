import { Injectable } from '@angular/core';
import {Task} from "./models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private  _tasks: Task[] = [];

  constructor() {
    this.deserializeTasks();
  }

  get tasks() {
    return this._tasks.filter(task => !task.isDone);
  }

  get doneTasks() {
    return this._tasks.filter(task => task.isDone);
  }

  addTask(task: Task) {
  this._tasks.push(task);
  this.serializeTasks();
  }

  markAsDone(task: Task) {
  this._tasks[this._tasks.indexOf(task)].isDone = true;
  this.serializeTasks();
  }

  private serializeTasks() {
  localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  private  deserializeTasks() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this._tasks = JSON.parse(tasks)
    }
  }
}
