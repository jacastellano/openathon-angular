import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

/**
 * Signup page
 */
@Component({
  selector: 'oevents-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /**
   * Signup form
   */
  signupForm: FormGroup;

  /**
   * User data
   */
  user: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Create an empty form
   */
  createForm() {
    this.signupForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  /**
   * Signup Operation
   */
  onSubmit() {
    this.user = this.signupForm.value;
    this.userService.signup(this.user).subscribe((event: Event) => {
      this.router.navigate(['/events']);
    });
  }

}
