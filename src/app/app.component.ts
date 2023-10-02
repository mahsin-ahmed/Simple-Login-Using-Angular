import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:any = '';
  password:any = '';

  Users =  {
    userName :'',
    password:'',
  }

  Signin(){
    if(this.Users.userName == 'admin' && this.Users.password == '582596'){
      // redirect to dashboard
      this.redirectUrl = '/dashboard';
    }else{
      // redirect to login page again
    }
  }
}
