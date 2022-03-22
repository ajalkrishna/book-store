import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from '../book-page/book-page.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent,children:[
    {path:'home',component:AllBooksComponent},
    {path:'favorites',component:FavoritesComponent},
    {path:'book',component:BookPageComponent},
    {path:'recommendations',component:RecommendedComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
