import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  newTask: string;
  taskList = Array<string>();

  constructor() {}

  addTask(task: string) {
    this.newTask = task;
    this.taskList.push(this.newTask);
  }

  completeTask(task: HTMLDivElement) {
    console.log(task);
    if (task.style.textDecoration === 'line-through 3px') {
      task.style.textDecoration = 'none';
    } else {
      task.style.textDecoration = 'line-through 3px';
    }
  }

  deleteTask(task: HTMLDivElement) {
    const index = this.taskList.indexOf(task.innerText);
    if (index !== -1) {
      this.taskList.splice(index, 1);
      task.remove();
    }
  }
}
