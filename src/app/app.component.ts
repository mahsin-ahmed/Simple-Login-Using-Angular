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
    userName :'mahsin',
    password:'582596',
  }

  Signin(){
    if(this.userName == this.Users.userName && this.password == this.Users.password){
      console.log('Login Success');
    }else{
      console.log('Login fail');
    }
  }
}
