import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

/**
 * User managment service
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Is user authenticated
   */
  isAuthenticated: boolean;

  constructor(private http: HttpClient) { }

  /**
   * Add user to system
   * @param user User data
   */
  signup(user: User): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(environment.apiURL + '/users/', user, { headers })
      .pipe(
        retry(3),
        map(response => {
          localStorage.setItem('user', JSON.stringify(response));
          this.setUser();
        }),
        catchError(this.handleError)
      );
  }

  /**
   * User login operation
   * @param user User data
   */
  login(user: User): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(environment.apiURL + '/users?email=' + user.email, { headers }).pipe(
      retry(3),
      map(us => {
        if (us[0].email) {
          localStorage.setItem('user', JSON.stringify(us[0]));
          this.setUser();
          return us[0].password === user.password ? us[0] : 'Password not valid.';
        }
      }),
      catchError(this.handleError)
    );
  }

  /**
   * User logout operation
   */
  logout() {
    localStorage.setItem('user', '');
    return false;
  }

  /**
   * Check if user is authenticated
   */
  checkUser(): boolean {
    this.setUser();
    return this.isAuthenticated;
  }

  /**
   * Update user is authenticated status
   */
  private setUser() {
    this.isAuthenticated = localStorage.getItem('user') ? true : false;
  }

  /**
   * Handle error
   * @param error Error detail
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues about what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
