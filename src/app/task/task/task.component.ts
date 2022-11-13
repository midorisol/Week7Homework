import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../models/task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  markAsDone() {
    this.taskService.markAsDone(this.task);
  }
}
