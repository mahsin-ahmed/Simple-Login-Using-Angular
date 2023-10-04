import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public authService: AuthService, 
    private router: Router
    ) {
    this.userInfo = this.authService.userInfo;
  }
  userInfo:{
    userName:string,
    isLoggedIn:boolean
  } ={
    userName:'',
    isLoggedIn:false
  };
  logout(): void {
    this.authService.logout();
    this.userInfo = this.authService.userInfo;
    this.router.navigate(['/']);
  }
}
