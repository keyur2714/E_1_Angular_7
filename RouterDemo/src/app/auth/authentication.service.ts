import { Observable,of, interval, from } from 'rxjs';
import { UserDetail } from './model/user-detail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter,map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    isLoggedIn : boolean = false;
    successUrl : string = 'home';

    appURL : string = 'http://localhost:3000/user_details';

    constructor(private httpClient : HttpClient){}    

    authenticate(userName : string, password : string) : Observable<UserDetail> {
        return this.getUserByUsernameAndPassword(userName,password);        
    }




    getUserByUsernameAndPassword(userName : string, password : string) : Observable<UserDetail> {
        const source =  from([1, 2, 3, 4, 5]);
        const example = source.pipe(map(val => val + 10));

        const example1 = source.pipe(
            map((val) =>{
                val + 10
                }
            )
        );

        alert(userName+" ** "+password);
        
        let userDetail : UserDetail ;
        const data =  this.httpClient.get(this.appURL).pipe(
            map((userList : UserDetail[])=>{
                for(let u of userList){
                    if(u.userName === userName && u.password === password) {
                        userDetail = u;
                        break;
                    }
                }
                return userDetail;   
            })
        ).subscribe(data=>alert(data.userName));

        return;    
    } 

    getIsLoggedIn() : boolean{
        return this.isLoggedIn;
    }

    getSuccessUrl() : string {
        return this.successUrl;
    }
}