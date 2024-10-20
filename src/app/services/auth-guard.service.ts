import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private authService: NbAuthService, private router: Router) { 

  }

  canActivate() {
    return this.authService.isAuthenticated()
    .pipe(
      tap((authenticated: any) => {
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
      }),
    );
  }

  



}
