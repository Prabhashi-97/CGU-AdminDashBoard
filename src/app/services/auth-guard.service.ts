import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private service:AuthService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token') != null){
        let roles = next.data['permittedRoles'] as Array<string>;
        if(roles){
          if(this.service.roleMatch(roles)) return true;
          else {
            this.router.navigate(['/overview/login']);
            return false;
          }
        }
        return true;
      }
      else{
      this.router.navigate(['/login']);
        return false;
      }
  }

  // constructor(private route: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Observable<boolean> | Promise<boolean> {
  //   var token = window.localStorage.getItem('token');
  //   if(token){
  //     return true;
  //   }else{
  //     this.route.navigateByUrl('/');
  //     return false;
  //   }
  // }
}
