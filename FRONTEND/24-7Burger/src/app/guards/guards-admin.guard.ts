import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuardsAdminGuard implements CanActivate {
  constructor (private route:Router) { }
  canActivate():any{
    (localStorage.getItem('token')) ? "" : this.route.navigateByUrl("/admin");
  }
  
}
