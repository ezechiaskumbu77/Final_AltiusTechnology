import { Injectable } from '@angular/core'; 
import { HttpClient, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { customEnvironment } from 'src/environments/custom-environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 
export class ContactService {
 

  private readonly API_URL = customEnvironment.BASE_URL+'/Contact';
  
  constructor(private http: HttpClient) { }
 
  SendEmail(body:any):   Observable<any> {
 
    
    return this.http.post<any>(`${this.API_URL}/SendEmail`, body, {
      reportProgress: true,
      responseType: 'json'
    }).pipe(
      tap(r => console.log('Email Sent : ', r)),
      catchError(this.handleError)
    );

   
  }  
   
  // tslint:disable-next-line: typedef
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}