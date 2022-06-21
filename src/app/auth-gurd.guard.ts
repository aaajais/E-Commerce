// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { map, Observable } from 'rxjs';
// import { AuthGurdGuard } from './services/auth.service';

// @Injectable({
// providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

// constructor(private auth:AuthGurdGuard,private router:Router){}
// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   return this.auth.user$.pipe(map(user=>{
//   if(user) return true;
//   window.alert("Login to see the items added previously!!")
//   this.router.navigate(['/login']);
//   return false;
//   }))
//   }}
