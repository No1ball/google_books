import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Books from "../types/booksInterface/Books";
import FetchBooks from "../API/booksApi";


type Params = {
    category:string,
    order : 'newest'| 'relevance',
    search:string
}
export const fetchAllBooks = createAsyncThunk<Books, undefined, {rejectValue: string}>(
    'books/fetchAllBooks',
    async function (){
        const response = await FetchBooks.getAllBooks();
        console.log(response)
        return (response) as Books
    }
)

export const fetchByQuery = createAsyncThunk<Books, Params,{rejectValue: string}>(
    'books/fetchByQuery',
    async function ({category, order , search}){
        const response = await FetchBooks.getBooksByQuery(category, order, search)
        return (response) as Books
    }
)

interface IState {
    data:{
        books: Books
    },
    state:{
        isLoading: boolean
    }
}

const initialState: IState = {
    data: {
        books: {
            kind:'',
            totalItems: 0,
            items: []
        }
    },
    state: {
        isLoading: false,
    }
}

const booksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        setLoading(state, action: PayloadAction<boolean>){
            state.state.isLoading = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchAllBooks.fulfilled, (state,action)=>{
            state.state.isLoading = true;
            state.data.books = action.payload
        });
        builder.addCase(fetchByQuery.pending, (state) =>{
            state.state.isLoading = false;
        })
        builder.addCase(fetchByQuery.fulfilled, (state, action) =>{
            state.state.isLoading = true;
            state.data.books = action.payload
        })
    })
})

export default booksSlice.reducer;