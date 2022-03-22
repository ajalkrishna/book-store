import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user/user-api.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  book: any
  constructor(public userApi: UserApiService) { }

  ngOnInit(): void {
    this.book = this.userApi.bookData.getValue()
  }

  addToFavs() {
    let favoriteBooks = this.userApi.user.getValue().favorites
    let existance = favoriteBooks.find(book => book._id == this.book._id)
    if (existance == undefined) {
      let favorite = {
        email: this.userApi.user.getValue().email,
        book: this.book
      }
      this.userApi.addToFavorites(favorite).subscribe({
        next: (res) => {
          if (res.message == 'Succefully added to Favorites') {
            alert(res.message)
            this.userApi.getUser(favorite.email).subscribe({
              next: (res) => {
                let user = res.payload
                this.userApi.user.next(user)
              }
            })
          }
        },
        error: (err) => { alert('something went wrong') }
      })
    }
    else {
      alert('Book is already Available in Favorites')
    }
  }

  addComment(comment) {
    let commentData = {
      title: this.book.title,
      commentObj: {
        username: this.userApi.user.getValue().username,
        comments: comment.value
      }
    }
    this.userApi.addComments(commentData).subscribe({
      next: (res) => {
        alert(res.message)
        this.updatedBook()
      },
      error: () => { alert('something went wrong') }
    })
  }

  recommend() {
    let updateRecommend = {
      title: this.book.title,
      status: true
    }
    this.userApi.updateRecommendation(updateRecommend).subscribe({
      next: (res) => {
        if (res.message == 'recommendation status Updated') {
          alert('Book added to Recommendation')
          this.updatedBook()
        }
      },
      error: () => { alert('something went wrong') }
    })
  }

  updatedBook() {
    this.userApi.getBooks().subscribe(res => {
      let updatedBook = res.payload.find(book => book.title == this.book.title)
      this.userApi.bookData.next(updatedBook)
    })
  }
}
