import { Component, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import {user } from '../../../types/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:user
  constructor(private userApi:UserApiService) { }

  ngOnInit(): void {
    this.user=this.userApi.user.getValue()
  }

}
