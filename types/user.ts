import {book} from './book'

export interface user{
    _id:string,
    username:string,
    password:string,
    email:string,
    interest:string,
    favorites:book
}