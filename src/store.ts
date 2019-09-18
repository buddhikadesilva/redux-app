import { Action, AnyAction } from 'redux';
import { ToDoActions } from './app/app.actions';
import { Todo } from './app/models/Todo';
import { TodosComponent } from './app/components/todos/todos.component';
import { TodoService } from './app/services/todo.service';
export interface IAppState {
  todos: Todo[];


}



export const INITIAL_STATE: IAppState = {
  todos: []
};


export function rootReducer(lastState = INITIAL_STATE, action: AnyAction): IAppState {
  switch (action.type) {
    case ToDoActions.LOAD:
      return {
        ...lastState,
        todos: [...lastState.todos, action.payload]
      };
    case ToDoActions.DELETE:
      return {
        ...lastState,
        todos: [...lastState.todos.slice(0, action.payload), ...lastState.todos.slice(action.payload + 1)]

      };

    case ToDoActions.ADD:
      return {
        ...lastState,
        todos: [
          ...lastState.todos,
          {
            id: action.payload,
            title: action.payload.title,
            completed: false
          }
        ]
      };

    case ToDoActions.TOGGLE:
      return {
        ...lastState,
        ...lastState.todos.map(todo => {
          console.log(todo),
          todo.id === action.payload ? {...lastState.todos, completed: !todo.completed } : lastState.todos;
        })
      };


    default:
      return lastState;
  }


}


