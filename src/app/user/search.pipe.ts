import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bookData:any[],searchTerm:string,): any[] {
    if(!bookData || !searchTerm){
      return bookData
    }
    else{
      return bookData.filter(book=>book.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
