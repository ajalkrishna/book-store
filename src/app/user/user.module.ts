import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RecommendedComponent } from './recommended/recommended.component';


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    AllBooksComponent,
    FavoritesComponent,
    SearchPipe,
    SearchComponent,
    RecommendedComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
    
  ]
})
export class UserModule { }
