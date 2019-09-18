import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { httpInterceptProviders } from './http-interceptors';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { rootReducer, IAppState, INITIAL_STATE } from '../store'; // < New
import { ToDoActions } from './app.actions'; // <- New


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [httpInterceptProviders, ToDoActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
    [ devTools.enhancer() ] :
    [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }

}
