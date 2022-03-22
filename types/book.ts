export interface book{
    _id:string,
    title:string,
    author:string,
    category:string,
    language:string,
    description:string,
    recommendation:boolean,
    comments:comment[]

}

interface comment{
    username:string,
    comments:string
}