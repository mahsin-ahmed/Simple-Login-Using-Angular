import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

const routes:Routes = [
  //default route
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',component:DashboardComponent, canActivate:[authGuard]  },

  // the 404 must be placed at the last
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
