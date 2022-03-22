import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';
import { RouteGuard } from './route.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate:[RouteGuard] },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
