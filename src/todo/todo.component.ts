import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TodoComponent implements OnInit {
  constructor() {}
  inputValue = '';
  tasksArray = [];

  ngOnInit() {}

  onAdd() {
    this.tasksArray.push(this.inputValue);
    console.log(this.inputValue);
  }

  remove(index: number) {
    this.tasksArray.splice(index, 1);
    console.log(index);
  }
}
