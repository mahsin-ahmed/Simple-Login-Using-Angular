import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Simple Login System";
  userInfo:{
    userName:string,
    isLoggedIn:boolean
  } ={
    userName:'',
    isLoggedIn:false
  };
}
