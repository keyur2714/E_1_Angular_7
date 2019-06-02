import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
    
 
    constructor(private autheticationService: AuthenticationService,private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |  Observable<boolean> {
        if(this.autheticationService.getIsLoggedIn()){
            return true; 
        }
        this.autheticationService.successUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  {
        if(this.autheticationService.getUserRole().toUpperCase() === 'ADMIN')
            return true;
        alert("Sorry You Dont have permission to see details on same page");
        return false;    
    }
}