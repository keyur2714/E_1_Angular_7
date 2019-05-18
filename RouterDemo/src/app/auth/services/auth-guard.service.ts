import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate{
 
    constructor(private autheticationService: AuthenticationService,private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |  Observable<boolean> {
        if(this.autheticationService.getIsLoggedIn()){
            return true; 
        }
        this.router.navigate(['/login']);
        return false;
    }
}