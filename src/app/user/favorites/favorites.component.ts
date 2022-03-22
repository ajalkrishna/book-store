import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor(public userApi:UserApiService) { }
  ngOnInit(): void {
  }

  removeBook(book){
    let removeBook={
      email:this.userApi.user.getValue().email,
      title:book.title
    }
    this.userApi.removeFavorite(removeBook).subscribe({
      next:(res)=>{
        this.userApi.getUser(removeBook.email).subscribe(res=>{
          this.userApi.user.next(res.payload)
        })
      },
      error:(err)=>alert('Something went wrong!!')
    })
  }

}
