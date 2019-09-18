import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/store';
import { ToDoActions } from '../../../app.actions';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor(private ngRedux: NgRedux<IAppState>,
    private AnyActions: ToDoActions) { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      id: -1,
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(todo);
   // this.ngRedux.dispatch({ type: 'ADD', item: this.AnyActions.add(todo) });
  }

}
