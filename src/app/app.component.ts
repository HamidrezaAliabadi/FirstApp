import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Task } from './Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgIf, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FirstApp';
  tasks: Task[] = [];
  taskTitle = '';

  constructor() {
    this.tasks = this.getList();
  }

  getList(): Task[] {
    return [
      {
        id: 1,
        title: 'کار اول',
        status: 1
      },

      {
        id: 2,
        title: 'کار دوم',
        status: 2
      },
      {
        id: 3,
        title: 'کار سوم',
        status: 3
      },
      {
        id: 4,
        title: 'کار چهارم',
        status: 1
      }];
  }

  addTask() {
    if (!this.taskTitle) {
      alert('Title cant be empty.')
      return
    }

    if (this.tasks.find(x => x.title == this.taskTitle)) {
      alert('Task already defined.')
      return
    }

    const task: Task = {
      id: this.tasks.length + 1,
      title: this.taskTitle,
      status: 1
    }

    this.tasks.push(task)
    this.taskTitle = ''
  }

  titleFilter() {
    // console.log(this.taskTitle)
    // const lst = this.tasks
    if (this.taskTitle.trim() != '') {
      this.tasks.filter(x => x.title.includes(this.taskTitle))
    }
    // else {
    //   this.tasks = lst
    // }
  }

  // editTitle(taskId: number) {
  //   // const task = this.tasks.find(x => x.id == taskId)!
  //   // const index = this.tasks.indexOf(task);
  //   // this.tasks.splice(index, 1);
  // }

  changeCursor(itemId: number) {
    const a = document.getElementById('td' + itemId.toString())!
    a.style.cursor = "pointer"
  }

  deleteTask(taskId: number) {
    const task = this.tasks.find(x => x.id == taskId)!
    if (confirm('آیا از حذف این ردیف مطمئن هستید؟') == true) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }

  changeStatus(taskId: number, status: number) {
    const task = this.tasks.find(x => x.id == taskId)!
    task.status = status
  }

  deleteAll() {
    if (confirm('آیا از حذف کل لیست مطمئن هستید؟') == true) {
      this.tasks = []
    }
  }

  trackByItems(index: number, task: Task): number {
    return task.id
  }
}
