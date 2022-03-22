import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private hc: HttpClient, private route: Router) { }

  user = new BehaviorSubject(null)
  searchTerm = new BehaviorSubject(null)
  bookData = new BehaviorSubject(null)

  // loginuser
  loginUser(loginObj): Observable<any> {
    return this.hc.post('http://localhost:4000/user/login', loginObj)
  }
  getUser(email): Observable<any> {
    return this.hc.get(`http://localhost:4000/user/get-user/${email}`)
  }
  // registeruser
  register(userObj): Observable<any> {
    return this.hc.post('http://localhost:4000/user/create-user', userObj)
  }
  // getproducts
  getBooks(): Observable<any> {
    return this.hc.get('http://localhost:4000/user/books')
  }
  // add to favorites
  addToFavorites(favObj): Observable<any> {
    return this.hc.put('http://localhost:4000/user/add-to-favorites', favObj)
  }
  // remove from favorites
  removeFavorite(favObj): Observable<any> {
    return this.hc.put('http://localhost:4000/user/remove-favorite',favObj)
  }
  // add comments
  addComments(commentObj): Observable<any> {
    return this.hc.put('http://localhost:4000/user/add-comments', commentObj)
  }
  // update recommendation
  updateRecommendation(statusObj): Observable<any> {
    return this.hc.put('http://localhost:4000/user/update-recommendation', statusObj)
  }

  // logout
  logOut() {
    // remove token from storage
    localStorage.removeItem('token')
    // make userbehaviour subject as null
    this.user.next(null)
    // navigate to login
    this.route.navigateByUrl('login')

  }
}
