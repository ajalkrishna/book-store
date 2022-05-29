"use strict";(self.webpackChunkdragApp=self.webpackChunkdragApp||[]).push([[434],{434:(P,g,l)=>{l.r(g),l.d(g,{UserModule:()=>B});var c=l(6019),m=l(8427),e=l(3556),p=l(6227);function Z(o,r){if(1&o&&(e.TgZ(0,"div"),e.TgZ(1,"h5",17),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA(),e._UZ(6,"hr"),e.qZA()),2&o){const t=r.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,t.username)),e.xp6(3),e.Oqu(t.comments)}}function f(o,r){if(1&o&&(e.TgZ(0,"div",15),e.TgZ(1,"h5"),e._uU(2,"Customer Comments"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,Z,7,4,"div",16),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.userApi.bookData.getValue().comments)}}let h=(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){this.book=this.userApi.bookData.getValue()}addToFavs(){if(null==this.userApi.user.getValue().favorites.find(i=>i._id==this.book._id)){let i={email:this.userApi.user.getValue().email,book:this.book};this.userApi.addToFavorites(i).subscribe({next:s=>{"Succefully added to Favorites"==s.message&&(alert(s.message),this.userApi.getUser(i.email).subscribe({next:a=>{this.userApi.user.next(a.payload)}}))},error:s=>{alert("something went wrong")}})}else alert("Book is already Available in Favorites")}addComment(t){let n={title:this.book.title,commentObj:{username:this.userApi.user.getValue().username,comments:t.value}};this.userApi.addComments(n).subscribe({next:i=>{alert(i.message),this.updatedBook()},error:()=>{alert("something went wrong")}})}recommend(){this.userApi.updateRecommendation({title:this.book.title,status:!0}).subscribe({next:n=>{"recommendation status Updated"==n.message&&(alert("Book added to Recommendation"),this.updatedBook())},error:()=>{alert("something went wrong")}})}updatedBook(){this.userApi.getBooks().subscribe(t=>{let n=t.payload.find(i=>i.title==this.book.title);this.userApi.bookData.next(n)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-book-page"]],decls:25,vars:6,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-12","col-md-7","col-lg-4"],["src","../../assets/book placeholder.png",1,"w-100"],[1,"col-12","col-md-5","col-lg-8"],[1,"lead"],[1,"w-50"],[1,"d-flex"],[1,"btn","btn-primary",3,"disabled","click"],[1,"ms-2","btn","btn-warning",3,"click"],["class","all-comment mt-4 mb-2",4,"ngIf"],[1,"new-comment","mt-3"],["name","comments","placeholder","comments",1,"form-control"],["comments",""],[1,"btn","btn-secondary","mt-2",3,"click"],[1,"all-comment","mt-4","mb-2"],[4,"ngFor","ngForOf"],[1,"fw-bold"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"h2"),e._uU(6),e.qZA(),e.TgZ(7,"p",5),e._uU(8),e.qZA(),e._UZ(9,"hr",6),e.TgZ(10,"p"),e._uU(11),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA(),e.TgZ(14,"div",7),e.TgZ(15,"button",8),e.NdJ("click",function(){return n.recommend()}),e._uU(16,"Recommend"),e.qZA(),e.TgZ(17,"button",9),e.NdJ("click",function(){return n.addToFavs()}),e._uU(18,"Add to Favorites"),e.qZA(),e.qZA(),e.YNc(19,f,5,1,"div",10),e.TgZ(20,"div",11),e._UZ(21,"textarea",12,13),e.TgZ(23,"button",14),e.NdJ("click",function(){e.CHM(i);const a=e.MAs(22);return n.addComment(a)}),e._uU(24,"Add Comment"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(6),e.Oqu(n.book.title),e.xp6(2),e.Oqu(n.book.author),e.xp6(3),e.hij("Category: ",n.book.category,""),e.xp6(2),e.hij("Description: ",n.book.description,""),e.xp6(2),e.Q6J("disabled",1==n.userApi.bookData.getValue().recommendation),e.xp6(4),e.Q6J("ngIf",0!=n.userApi.bookData.getValue().comments.length))},directives:[c.O5,c.sg],pipes:[c.rS],styles:[""]}),o})();var u=l(7537);let v=(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){}search(){this.userApi.searchTerm.next(this.searchTerm)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-search"]],decls:5,vars:1,consts:[[1,"container"],[1,"input-group","mb-3","mx-auto"],["type","text","placeholder","All",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-text",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"input",2),e.NdJ("ngModelChange",function(s){return n.searchTerm=s}),e.qZA(),e.TgZ(3,"span",3),e.NdJ("click",function(){return n.search()}),e._uU(4,"Search"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",n.searchTerm))},directives:[u.Fj,u.JJ,u.On],styles:[".input-group-text[_ngcontent-%COMP%]{cursor:pointer}.input-group[_ngcontent-%COMP%]{width:500px}"]}),o})(),_=(()=>{class o{transform(t,n){return t&&n?t.filter(i=>-1!==i.title.toLowerCase().indexOf(n.toLowerCase())):t}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"search",type:o,pure:!0}),o})();function b(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",6),e.TgZ(1,"div",7),e.TgZ(2,"div",8),e.TgZ(3,"img",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().showMore(s)}),e.qZA(),e.qZA(),e.TgZ(4,"div",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().showMore(s)}),e.TgZ(5,"h3"),e._uU(6),e.qZA(),e.TgZ(7,"p",11),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"button",12),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().addToFavs(s)}),e._uU(12,"Add to favorites"),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(6),e.Oqu(t.title),e.xp6(2),e.Oqu(t.author),e.xp6(2),e.Oqu(t.category)}}let A=(()=>{class o{constructor(t,n){this.userApi=t,this.route=n}ngOnInit(){this.userApi.getBooks().subscribe(t=>{this.books=t.payload})}addToFavs(t){if(null==this.userApi.user.getValue().favorites.find(s=>s._id==t._id)){let s={email:this.userApi.user.getValue().email,book:t};this.userApi.addToFavorites(s).subscribe({next:a=>{"Succefully added to Favorites"==a.message&&(alert(a.message),this.userApi.getUser(s.email).subscribe({next:d=>{this.userApi.user.next(d.payload)}}))},error:a=>{alert("something went wrong")}})}else alert("Book is already Available in Favorites")}showMore(t){this.userApi.bookData.next(t),this.route.navigateByUrl("user/book")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-all-books"]],decls:8,vars:4,consts:[[1,"search"],[1,"border"],[1,"container"],[1,"display-5","mb-3","mt-2","allBooksHeading"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-4","g-4","mb-3"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","h-100"],[1,"card-head"],["src","../../../assets/placeholder-3.png",1,"img-fluid","w-100",3,"click"],[1,"card-body",3,"click"],[1,"lead"],[1,"btn","w-100",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-search",1),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4,"Explore the New Range of Collections"),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,b,13,3,"div",5),e.ALo(7,"search"),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("ngForOf",e.xi3(7,1,n.books,n.userApi.searchTerm.getValue())))},directives:[v,c.sg],pipes:[_],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Smooch+Sans&display=swap";.btn[_ngcontent-%COMP%]{height:3rem;background-color:#ffe600;border-radius:0}.btn[_ngcontent-%COMP%]:hover{transition:background-color .5s ease;background-color:#fff;border:2px solid black;color:#000}.card[_ngcontent-%COMP%]:hover{transition:all .3s ease;transform:scale(1.05)}.search[_ngcontent-%COMP%]{background-color:#f5eadca8}.allBooksHeading[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif}']}),o})();function k(o,r){1&o&&(e.TgZ(0,"div",4),e._UZ(1,"app-search",5),e.qZA())}function T(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",6),e.TgZ(1,"div",7),e.TgZ(2,"div",8),e.TgZ(3,"div",9),e._UZ(4,"img",10),e.qZA(),e.qZA(),e.TgZ(5,"div",11),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"button",12),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().removeBook(s)}),e._uU(11,"Remove"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(7),e.Oqu(t.title),e.xp6(2),e.Oqu(t.author)}}function C(o,r){1&o&&(e.TgZ(0,"div",13),e._uU(1,"Favorites are empty "),e.qZA())}let x=(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){}removeBook(t){let n={email:this.userApi.user.getValue().email,title:t.title};this.userApi.removeFavorite(n).subscribe({next:i=>{this.userApi.getUser(n.email).subscribe(s=>{this.userApi.user.next(s.payload)})},error:i=>alert("Something went wrong!!")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-favorites"]],decls:5,vars:6,consts:[["class","search mb-2",4,"ngIf"],[1,"container"],["class","card mb-2",4,"ngFor","ngForOf"],["class","text-center mt-4 text-danger",4,"ngIf"],[1,"search","mb-2"],[1,"border"],[1,"card","mb-2"],[1,"row"],[1,"col-4"],[1,"img-placeholder"],["src","../../../assets/book-placeholder 2.png",1,"w-50"],[1,"col-5"],[1,"btn","btn-danger",3,"click"],[1,"text-center","mt-4","text-danger"]],template:function(t,n){1&t&&(e.YNc(0,k,2,0,"div",0),e.TgZ(1,"div",1),e.YNc(2,T,12,2,"div",2),e.ALo(3,"search"),e.YNc(4,C,2,0,"div",3),e.qZA()),2&t&&(e.Q6J("ngIf",n.userApi.user.getValue().favorites.length>0),e.xp6(2),e.Q6J("ngForOf",e.xi3(3,3,n.userApi.user.getValue().favorites,n.userApi.searchTerm.getValue())),e.xp6(2),e.Q6J("ngIf",0==n.userApi.user.getValue().favorites.length))},directives:[c.O5,c.sg,v],pipes:[_],styles:[".search[_ngcontent-%COMP%]{background-color:#f5f5dca8}"]}),o})();function q(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3),e.TgZ(1,"div",4),e.TgZ(2,"div",5),e.TgZ(3,"div",6),e._UZ(4,"img",7),e.qZA(),e.qZA(),e.TgZ(5,"div",8),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().unRecommend(s)}),e._uU(11,"Un-Recommend"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(7),e.Oqu(t.title),e.xp6(2),e.Oqu(t.author)}}function y(o,r){1&o&&(e.TgZ(0,"div",10),e._uU(1,"No Recommendations Available"),e.qZA())}let U=(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){this.updateBook()}unRecommend(t){this.userApi.updateRecommendation({title:t.title,status:!1}).subscribe({next:i=>{"recommendation status Updated"==i.message&&(alert("Book Removed Recommendation"),this.updateBook())},error:()=>{alert("something went wrong")}})}updateBook(){this.userApi.getBooks().subscribe(t=>{this.books=t.payload.filter(n=>1==n.recommendation)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-recommended"]],decls:3,vars:2,consts:[[1,"container","mt-3"],["class","card mb-2",4,"ngFor","ngForOf"],["class","text-center mt-4 text-danger",4,"ngIf"],[1,"card","mb-2"],[1,"row"],[1,"col-4"],[1,"img-placeholder"],["src","../../../assets/book-placeholder 2.png",1,"w-50"],[1,"col-6"],[1,"btn","btn-danger",3,"click"],[1,"text-center","mt-4","text-danger"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,q,12,2,"div",1),e.YNc(2,y,2,0,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",n.books),e.xp6(1),e.Q6J("ngIf",0==n.books.length))},directives:[c.sg,c.O5],styles:[""]}),o})(),O=(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-navbar"]],decls:20,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-light","navbar-light"],[1,"container"],[1,"navbar-brand","fs-1"],["type","button","data-mdb-toggle","collapse","data-mdb-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"fa-solid","fa-bars"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","align-items-center"],[1,"nav-item"],["routerLink","home","routerLinkActive","active",1,"nav-link","mx-2"],["routerLink","recommendations","routerLinkActive","active",1,"nav-link","mx-2"],["routerLink","favorites","routerLinkActive","active",1,"nav-link","mx-2"],[1,"nav-item","ms-2"],[1,"nav-link","signOut",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"nav",0),e.TgZ(1,"div",1),e.TgZ(2,"a",2),e._uU(3,"BookStore"),e.qZA(),e.TgZ(4,"button",3),e._UZ(5,"i",4),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"ul",6),e.TgZ(8,"li",7),e.TgZ(9,"a",8),e._uU(10,"Home"),e.qZA(),e.qZA(),e.TgZ(11,"li",7),e.TgZ(12,"a",9),e._uU(13,"Recommendations"),e.qZA(),e.qZA(),e.TgZ(14,"li",7),e.TgZ(15,"a",10),e._uU(16,"My Favorites"),e.qZA(),e.qZA(),e.TgZ(17,"li",11),e.TgZ(18,"a",12),e.NdJ("click",function(){return n.userApi.logOut()}),e._uU(19,"Sign Out"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[m.yS,m.Od],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Smooch+Sans&family=Syne+Mono&display=swap";.navbar-brand[_ngcontent-%COMP%]{font-family:"Syne Mono",monospace}.signOut[_ngcontent-%COMP%]{cursor:pointer}.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#000;font-size:1.5rem;font-family:"Smooch Sans",sans-serif}.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{transform:scale(1.05)}']}),o})();const w=[{path:"",component:(()=>{class o{constructor(t){this.userApi=t}ngOnInit(){this.user=this.userApi.user.getValue()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user"]],decls:3,vars:0,consts:[[1,"page"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},directives:[O,m.lC],styles:[""]}),o})(),children:[{path:"home",component:A},{path:"favorites",component:x},{path:"book",component:h},{path:"recommendations",component:U},{path:"",redirectTo:"home",pathMatch:"full"}]}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(w)],m.Bz]}),o})(),B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,F,u.u5]]}),o})()}}]);