import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userSignupForm: any
  constructor(private fb: FormBuilder, private userApi: UserApiService, private route:Router) { }

  ngOnInit(): void {
    this.userSignupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      interest: ['', Validators.required]
    })
  }

  signUp() {
    let userObj = this.userSignupForm.value
    this.userApi.register(userObj).subscribe({
      next: (res) => {
        if (res.message == 'user created successfully') {
          this.route.navigateByUrl('login')
          alert('Account Created Successfully')
        }
        else {
          alert(res.message)
        }
      },
      error: () => alert('something went wrong!!!')
    })

  }

}
