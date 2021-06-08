import { Injectable } from '@angular/core'; 
import { HttpClient, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { customEnvironment } from 'src/environments/custom-environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 
export class CareerService {
 

  private readonly API_URL = customEnvironment.BASE_URL+'/career';
  
  constructor(private http: HttpClient) { }
 
  candidature(body:any):   Observable<any> {
 
    // const req = new HttpRequest('POST', `${this.API_URL}/candidature`, body, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    return this.http.post<any>(`${this.API_URL}/candidature`, body, {
      reportProgress: true,
      responseType: 'json'
    }).pipe(
      tap(r => console.log('candidature spontanée : ', r)),
      catchError(this.handleError)
    );

   
  } 
  upload(file: File ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.API_URL + '/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
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