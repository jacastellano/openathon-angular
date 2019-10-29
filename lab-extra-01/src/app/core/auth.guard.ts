import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

/**
 * Authentication Guard Service
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    private userService: UserService,
  ) { }

  /**
   * guard method
   */
  canActivate(): boolean {
    return this.checkLogin();
  }

  /**
   * Check status
   */
  checkLogin(): boolean {
    if (this.userService.checkUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
