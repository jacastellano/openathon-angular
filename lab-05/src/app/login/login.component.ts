import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';

/**
 * Login page
 */
@Component({
  selector: 'oevents-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * login form
   */
  loginForm: FormGroup;

  /**
   * info message
   */
  msgs: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Create login form
   */
  createForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  /**
   * Login operation
   */
  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.email) {
        this.router.navigate(['/events']);
      } else {
        this.msgs = res;
      }
    }, err => this.msgs = 'Email not found.');
  }

}
