import { Observable,of, interval, from, throwError } from 'rxjs';
import { UserDetail } from './model/user-detail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter,map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    isLoggedIn : boolean = false;
    successUrl : string = 'home';
    userRole : string = '';

    appURL : string = 'http://localhost:3000/user_details';

    constructor(private httpClient : HttpClient){}    

    authenticate(userName : string, password : string) : Observable<any> {
        return this.getUserByUsernameAndPassword(userName,password);
    }

    getUserByUsernameAndPassword(userName : string, password : string) : Observable<any> {        
        return this.httpClient.get(this.appURL).pipe(                        
            map((userList : UserDetail[]) => { 
                    let user = userList.find(u => u.userName === userName && u.password === password);                          
                    if(user === undefined){
                        return this.error("Invalid username and password");
                    }
                    if(user) {
                        this.isLoggedIn = true;
                        this.userRole = user.userRole;
                        return user;
                    }                    
            }
            )            
        );
    } 

    getIsLoggedIn() : boolean{
        return this.isLoggedIn;
    }

    getUserRole() : string {
        return this.userRole;
    }

    error(message) {
        return throwError({ error: { message } });
    }
    getSuccessUrl() : string {
        return this.successUrl;
    }
}