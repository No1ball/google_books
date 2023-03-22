import axios from "axios";

interface Books{
    kind:string,
    totalItems: number,
    items: any[]
}
export default class FetchBooks{
    private static key: string = 'AIzaSyBX3Lkwc5cv-D0Kwrn9jR1whhrcMmGe428';
    static async getAllBooks(){
        try {
            const data = await
                axios.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=all+subject&key=${this.key}`);
            console.log(data.data)
            return data.data
        }catch (err) {
            console.log(err)
        }
    }
}