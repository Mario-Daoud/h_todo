import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  task: string;

  constructor() {}

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.task === '') return;

    this.addTaskEvent.emit(this.task);

    this.clearTask();
  }

  clearTask() {
    this.task = '';
  }
}
