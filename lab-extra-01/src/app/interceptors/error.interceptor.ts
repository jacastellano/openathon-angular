import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        console.log('ErrorInterceptor');
        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                if (error.status !== 404) {
                    console.error(error);
                }
                return throwError(error);
            })
        );

    }

}