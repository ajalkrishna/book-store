import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userApi: UserApiService,private route:Router) { }
  loginForm:any
  ngOnInit(): void {
    this.loginForm={
      email:'',
      password:''
    }
  }

  login() {
    this.userApi.loginUser(this.loginForm).subscribe({
      next: (res) => {
        if (res.message == 'Login successful') {
        // save token to local storage
        localStorage.setItem('token',res.token)
        // update userBehaviorSub
        this.userApi.user.next(res.payload)
        // navigate to user 
        this.route.navigateByUrl('user')
      }
      else{
        alert(res.message)
      }
    },
      error: (err) => console.log(err.message)
    })
}

// goto signup page
registerPage(){
  this.route.navigateByUrl('register')
}

}
