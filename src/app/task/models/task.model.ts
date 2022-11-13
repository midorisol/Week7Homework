export class Task {
  name: string;
  description: string;
  creator: string;
  isDone: boolean;

  constructor(name: string, description: string, creator: string, isDone: boolean) {
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.isDone = false;
  }
}
