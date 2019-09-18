import { Injectable } from '@angular/core';
import { Action, AnyAction } from 'redux';
import { Todo } from './models/Todo';

@Injectable()
export class ToDoActions {
  static LOAD = 'LOAD';
  static DELETE = 'DELETE';
  static ADD = 'ADD';
  static TOGGLE = 'TOGGLE';

  load(data: Todo[]): AnyAction {
    return { type: ToDoActions.LOAD, payload: data };
  }

  delete(id: number): AnyAction {
    return { type: ToDoActions.DELETE, payload: id };
  }

  add(item: Todo): AnyAction {
    return { type: ToDoActions.ADD, payload: item };
  }

  toggle(id: number): AnyAction {
    return { type: ToDoActions.TOGGLE, payload: id };
  }
}
