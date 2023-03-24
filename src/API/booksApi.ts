import axios from "axios";
import Books from "../types/booksInterface/Books";

export default class FetchBooks{
    private static key: string = 'AIzaSyBX3Lkwc5cv-D0Kwrn9jR1whhrcMmGe428';
    static async getAllBooks(){
        try {
            const data = await
                axios.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=bussines&orderBy=relevance&key=${this.key}`);
            console.log(data.data)
            return data.data
        }catch (err) {
            console.log(err)
        }
    }
    static async getBooksByQuery (category: string, order : 'newest'| 'relevance', search:string) {
        try {
            const data = await
                axios.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}+intitle:${search}&orderBy=${order}&key=${this.key}`);
            console.log(data.data)
            return data.data
        }catch (err) {
            console.log(err)
        }
    }
}