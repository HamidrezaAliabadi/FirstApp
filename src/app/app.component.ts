import { Component, ViewChild } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Task } from './Task';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IconButtonComponent,
    TaskTableComponent,
    TaskFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FirstApp'
  @ViewChild('table') table : TaskTableComponent
  
  clearList() {
    this.table.refresh()
  }

}
