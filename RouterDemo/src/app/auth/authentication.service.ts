import { Observable,of } from 'rxjs';
import { UserDetail } from './model/uer-detaial';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    isLoggedIn : boolean = false;

    appURL : string = 'http://localhost:3000/user_details';

    constructor(private httpClient : HttpClient){}    

    authenticate(userName : string, password : string) : Observable<boolean> {
        let flag = false;
        this.getUserByUsernameAndPassword(userName,password).subscribe(
            (user)=>{
                localStorage.setItem("token",user.token);
                flag = true;
                this.isLoggedIn = true;
            },
            (error)=>{},
            ()=>{
                return of(flag);
            }
        )
        return of(flag);
    }

    getUserByUsernameAndPassword(userName : string, password : string) : Observable<UserDetail> {
        return this.httpClient.get<UserDetail>(this.appURL).pipe(
            filter(user=>user.userName == userName && user.password == password),
            map(user=> user)
        );
    } 

    getIsLoggedIn() : boolean{
        return this.isLoggedIn;
    }
}