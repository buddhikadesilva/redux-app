import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

import { Todo } from 'src/app/models/Todo';
// import { store } from '@angular/core/src/render3';
import { Action, AnyAction } from 'redux';
import { IAppState } from 'src/store';
import { NgRedux } from '@angular-redux/store';
import { ToDoActions } from '../../../app.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService,
    private ngRedux: NgRedux<IAppState>,
    private AnyActions: ToDoActions) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    let lo;
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todoResponse => {
      lo = todoResponse;
      console.log(lo);
      console.log(this.AnyActions.toggle(lo.id));
      this.ngRedux.dispatch(this.AnyActions.toggle(lo.id));

    });


  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
    // this.ngRedux.dispatch({ type: 'DELETE', id: this.AnyActions.delete(todo.id) });
  }

}
