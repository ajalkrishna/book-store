import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm:any
  constructor(private userApi:UserApiService) { }

  ngOnInit(): void {
  }
  search(){
    this.userApi.searchTerm.next(this.searchTerm)
  }

}
