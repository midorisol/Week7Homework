import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "./models/task.model";

@Pipe({
  name: 'task'
})
export class TaskPipe implements PipeTransform {

  transform(task: Task): string {
    return `${task.name} - ${task.description} (${task.creator ?? 'Unknown'})`;
  }

}
