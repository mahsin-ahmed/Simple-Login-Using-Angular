import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private app:AppComponent) {}
  
  User:{
    UserName:string,
    UserPass:string
  }={
    UserName:'',
    UserPass:'',
  };
  userInfo:{
    userName:string,
    isLoggedIn:boolean
  } ={
    userName:'',
    isLoggedIn:false
  };

   login(): void {
    this.authService.login(this.User.UserName,this.User.UserPass).subscribe(() => {
      if (this.authService.isLoggedIn) {
        //this.app.isLogIn = this.authService.isLoggedIn;
        this.app.userInfo = this.authService.userInfo;
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([redirectUrl]);
      } else {
        //this.app.isLogIn = this.authService.isLoggedIn;
        this.app.userInfo = this.authService.userInfo;
        this.router.navigate(['/']);
      }
    });
  }
}
