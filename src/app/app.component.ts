import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ToDoActions } from './app.actions';
import { IAppState } from "../store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private AnyActions: ToDoActions) { }



}
