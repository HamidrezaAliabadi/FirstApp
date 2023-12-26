import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = []
  taskTitle = ''
  taskId = 0
  constructor() {
    this.tasks = this.initList()
  }

  initList(): Task[] {
    return [
      {
        id: 1,
        title: 'کار اول',
        status: 1
      }
      , {
        id: 2,
        title: 'کار دوم',
        status: 2
      }
      , {
        id: 3,
        title: 'کار سوم',
        status: 3
      }
    ]
  }

  list() {
    return this.tasks
  }

  add(task: Task) {
    this.tasks.push(task)
  }

  find(id: number) {
    return this.tasks.find(x => x.id == id)
  }

  findBy(title: string) {
    return this.tasks.find(x => x.title == title)
  }

  deleteAll() {
    this.tasks = []
  }

  length() {
    return this.tasks.length
  }

  delete(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
