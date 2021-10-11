import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    tasklist: TodoItem[] =[
      {task: 'do laundry', completed: false},
      {task: 'feed dogs', completed: true},
      {task: 'put away dishes', completed: false},
      {task: 'water garden', completed: false},
      {task: 'take pills', completed: true}

    ];
  constructor() { }

  ngOnInit(): void {
  }

}
