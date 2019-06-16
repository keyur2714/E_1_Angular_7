import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  

  constructor(private authenticationService : AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.body);
    console.log(sessionStorage.getItem("token"));
    let token = sessionStorage.getItem("token");
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(val => console.log(`BEFORE Response: ${JSON.stringify(val)}`))      
    );
  }
  
}
