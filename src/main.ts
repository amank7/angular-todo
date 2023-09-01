import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <hr/>
    <h1>ToDo</h1>
    <app-todo></app-todo>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
