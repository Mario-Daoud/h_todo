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

  completeTask(task: HTMLDivElement, icon: HTMLElement) {
    if (task.style.textDecoration === 'line-through 3px') {
      icon.classList.replace('fa-x', 'fa-check');
      task.style.textDecoration = 'none';
    } else {
      icon.classList.replace('fa-check', 'fa-x');
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

  clearAll() {
    if (this.taskList.length === 0) return;
    if (confirm('Are you sure you want to delete all tasks?')) {
      this.taskList = [];
    }
  }
}
