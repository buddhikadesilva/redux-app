import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/store';
import { ToDoActions } from '../../app.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService,
    private ngRedux: NgRedux<IAppState>,
    private AnyActions: ToDoActions) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.ngRedux.dispatch(this.AnyActions.load(todos));
    });
  }

  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    this.ngRedux.dispatch(this.AnyActions.delete(todo.id));

  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todoResponse => {
      this.todos.push(todoResponse);
      this.ngRedux.dispatch(this.AnyActions.add(todoResponse));
    });
  }

}
