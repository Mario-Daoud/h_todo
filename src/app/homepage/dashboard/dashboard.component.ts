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
}
