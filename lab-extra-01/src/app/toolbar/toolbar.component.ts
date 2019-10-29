import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../core/user.service';

/**
 * Main toolbar header
 */
@Component({
  selector: 'oevents-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements DoCheck {

  /**
   * Authenticated user
   */
  user: User;

  /**
   * If somebody is authenticated
   */
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngDoCheck() {
    this.checkUser();
  }

  /**
   * Check if user is authenticated and recue
   */
  checkUser() {
    this.isAuthenticated = this.userService.checkUser();
    if (this.isAuthenticated) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  /**
   * Logout operation
   */
  logout() {
    this.userService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

}
