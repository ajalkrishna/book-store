import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(): boolean {
    let token = localStorage.getItem('token')
    if (token) {
      return true
    }
    else {
      alert('Unauthorized Request..!')
      this.route.navigateByUrl('login')
      return false
    }
  }

}
