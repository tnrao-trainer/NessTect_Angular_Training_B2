import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(sessionStorage.getItem("AUTH_TOKEN") == null)
    {
      //alert("message from AuthGuard Service");
      this.router.navigate(['/Login'], { queryParams : { returnUrl: state.url  } });
      return false;
    }
    else
    {
      return true;
    }
  }

}
