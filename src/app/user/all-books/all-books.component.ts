import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import {book} from '../../../../types/book'

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  constructor(public userApi:UserApiService,private route:Router) { }
  books:book[]
  ngOnInit(): void {
    this.userApi.getBooks().subscribe(res=>{
      this.books= res.payload
    })
  }

  addToFavs(bookObj){
    let favoriteBooks= this.userApi.user.getValue().favorites
    let existance = favoriteBooks.find(book=>book._id == bookObj._id)
    if(existance==undefined){
      let favorite={
        email:this.userApi.user.getValue().email,
        book:bookObj
      }
      this.userApi.addToFavorites(favorite).subscribe({
        next:(res)=>{
          if(res.message=='Succefully added to Favorites'){
            alert(res.message)
            this.userApi.getUser(favorite.email).subscribe({
              next:(res)=>{
                let user = res.payload
                this.userApi.user.next(user)
              }
            })
          }
        },
        error:(err)=>{alert('something went wrong')}
      })
    }
    else{
      alert('Book is already Available in Favorites')
    }

    
  }

  showMore(book){
    this.userApi.bookData.next(book)
    this.route.navigateByUrl('user/book')
  }

}
