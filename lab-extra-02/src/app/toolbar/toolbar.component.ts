import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../core/user.service';
import { Store, select } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';
import * as login from '../store/login/login.actions';

/**
 * Main toolbar header
 */
@Component({
  selector: 'oevents-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {

  /**
   * Authenticated user
   */
  user: User;

  /**
   * If somebody is authenticated
   */
  isAuthenticated: boolean;

  /**
   * Subscription object
   */
  subscriptionLogin: SubscriptionLike;

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<any>
  ) {
    this.subscriptionLogin = store.pipe(select('login')).subscribe(state => {
      if (state) {
        this.isAuthenticated = state.logged;
        if (this.isAuthenticated) {
          this.user = JSON.parse(localStorage.getItem('user'));
        }
      }
    });
  }

  /**
   * Logout operation
   */
  logout() {
    this.userService.logout();
    this.store.dispatch(new login.Logged(false));
    this.router.navigate(['/home']);
  }

  /**
   * Unsubscribe
   */
  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
  }

}
