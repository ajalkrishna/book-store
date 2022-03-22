import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  books: any
  constructor(private userApi: UserApiService) { }

  ngOnInit(): void {
    this.updateBook()
  }
  unRecommend(book){
    let updateRecommend = {
      title:book.title,
      status:false
    }
    this.userApi.updateRecommendation(updateRecommend).subscribe({
      next:(res)=>{
        if(res.message=='recommendation status Updated'){
          alert('Book Removed Recommendation')
          this.updateBook()
        }
      },
      error:()=>{alert('something went wrong')}
    })
  }
  
  updateBook(){
    this.userApi.getBooks().subscribe(res => {
      this.books = res.payload.filter(book => book.recommendation == true)
    })

  }

}
