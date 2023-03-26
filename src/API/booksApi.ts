import axios from "axios";
import Books from "../types/booksInterface/Books";
import CurrentBook from "../types/booksInterface/CurrentBook";

export default class FetchBooks{
    private static key: string = 'AIzaSyBX3Lkwc5cv-D0Kwrn9jR1whhrcMmGe428';
    static async getAllBooks(){
        try {
            const data = await
                axios.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=subject:&orderBy=relevance&maxResults=30&key=${this.key}`);
            return data.data
        }catch (err) {
            console.log(err)
        }
    }
    static async getBooksByQuery (category: string, order : string, search:string) {
        try {
            if(category.localeCompare('all') === 0){
                category = ''
            }
            const data = await
                axios.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}+intitle:${search}&maxResults=30&orderBy=${order}&key=${this.key}`);
            if(data.data.totalItems === 0){
                data.data = {
                    ...data.data,
                    items: []
                }
            }
            return data.data
        }catch (err) {
            const errB: Books = {
                kind:'',
                totalItems: 0,
                items:[]
            }
            return errB
        }
    }
    static async getBookById(id: string){
        try{
            const data = await axios.get<CurrentBook>(`https://www.googleapis.com/books/v1/volumes/${id}?key=${this.key}`)
            return data.data
        }catch (err){
            const errB: CurrentBook = {
               volumeInfo:{
                   imageLinks: "",
                   title: '',
                   authors: [],
                   categories: [],
                   description: ''
               },
            }
            return errB
        }
    }
}