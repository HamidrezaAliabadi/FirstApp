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
  tasks: Task[] = [
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
  taskTitle = '';
  taskId = 0
  filteredTasks: Task[] = []

  constructor() {
    this.filteredTasks = this.tasks
    console.log(this.filteredTasks)
  }

  // getList(): Task[] {
  //   return [
  //   ];
  // }

  editTitle(taskId: number) {
    const task = this.tasks.find(x => x.id == taskId)!
    // const index = this.tasks.indexOf(task);
    this.taskTitle = task.title
    this.taskId = task.id
  }

  addTask() {
    if (!this.taskTitle) {
      alert('عنوان کار نمی تواند خالی باشد.')
      return
    }

    if (this.tasks.find(x => x.title == this.taskTitle)) {
      alert('این کار قبلا تعریف شده است.')
      return
    }

    if (this.taskId == 0) {
      const task: Task = {
        id: this.tasks.length + 1,
        title: this.taskTitle,
        status: 1
      }
      this.tasks.push(task)
    }
    else {
      const task = this.tasks.find(x => x.id == this.taskId)!
      task.title = this.taskTitle
    }
    this.taskTitle = ''
    this.taskId = 0
    this.filteredTasks = this.tasks
  }

  titleFilter() {
    if (this.taskTitle.trim() != '') {
      this.filteredTasks = this.tasks.filter(x => x.title.includes(this.taskTitle))
    } else {
      this.filteredTasks = this.tasks
    }
  }

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

  toPersian(event: any) {
    const parsianChr = ' !"#$%،گ)(×+و-./0123456789:ك,=.؟@ِذ}ىُيلا÷ـ،/’د×؛َءٍف‘{ًْإ~جژچ^_پشذزيثبلاهتنمئدخحضقسفعرصطغظ<|>ّ'
    if (event.keyCode > 31)
      if (event.keyCode < 128) {
        console.log(String.fromCharCode(parsianChr.charCodeAt(event.keyCode - 32)));
        const a = String.fromCharCode(parsianChr.charCodeAt(event.keyCode - 32));
        event.target.value.replace(event.key, a);
      }
  }
}
