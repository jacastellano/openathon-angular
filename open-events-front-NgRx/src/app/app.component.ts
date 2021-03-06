import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as login from './store/login/login.actions';
import { UserService } from "./core/user.service";

@Component({
  selector: 'oevents-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'open-events-front';

  constructor(
    private userService: UserService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.userService.checkUser() ? this.store.dispatch(new login.Logged(true)) : this.store.dispatch(new login.Logged(false));
  }
}