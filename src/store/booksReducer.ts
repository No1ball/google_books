import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Books from "../types/booksInterface/Books";
import FetchBooks from "../API/booksApi";
import CurrentBook from "../types/booksInterface/CurrentBook";


type Params = {
    category:string,
    order : string,
    search:string,
    startIndex?: number
}


export const fetchAllBooks = createAsyncThunk<Books, undefined, {rejectValue: string}>(
    'books/fetchAllBooks',
    async function (){
        const response = await FetchBooks.getAllBooks();
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

export const fetchBookById = createAsyncThunk<CurrentBook, string, {rejectValue: string}>(
    'books/fetchBookById',
    async function (id){
        const response = await FetchBooks.getBookById(id)
        return (response) as CurrentBook
    }
)

export const fetchMoreBooks = createAsyncThunk<any[], Params, {rejectValue: string}>(
    'books/fetchMoreBooks',
    async function ({category, order , search, startIndex}){
        const response = await FetchBooks.getMoreData(category,order,search, startIndex)
        console.log(response.items)
        return (response.items)
    }
)
interface IState {
    data:{
        books: Books,
        order: string,
        search: string,
        category: string,
        currentBook : CurrentBook,
        categories: string[],
        description: string
    },
    state:{
        isLoading: boolean,
        startIndex: number,
        buttonLoad: boolean
    }
}

const initialState: IState = {
    data: {
        books: {
            kind:'',
            totalItems: 0,
            items: [],
        },
        search:'',
        category: 'all',
        order: 'relevance',
        currentBook: {
            volumeInfo: {
                imageLinks: '',
                title: '',
                authors: [],
                categories: [],
                description: ''
            },

        },
        categories: [],
        description: ""
    },
    state: {
        isLoading: false,
        startIndex: 0,
        buttonLoad: false
    }
}

const booksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        setSearchQuery(state, action: PayloadAction<string>){
            state.data.search = action.payload
        },
        setCategory(state, action: PayloadAction<string>){
            state.data.category = action.payload
        },
        setOrder(state, action: PayloadAction<string>){
            state.data.order = action.payload
        },
        setCategoriesAndDescription(state, action: PayloadAction<{categories: string[], description: string}>){
            state.data.categories = action.payload.categories;
            state.data.description = action.payload.description
        },
        setStartIndex(state){
            state.state.startIndex += 30;
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
            state.data.books = action.payload;
            state.state.startIndex = 0;
        })
        builder.addCase(fetchBookById.pending, (state) =>{
            state.state.isLoading = false;
        })
        builder.addCase(fetchBookById.fulfilled, (state, action) => {
            state.state.isLoading = true;
            state.data.currentBook = action.payload
        })
        builder.addCase(fetchMoreBooks.pending, (state) =>{
            state.state.buttonLoad = true;
        })
        builder.addCase(fetchMoreBooks.fulfilled, (state,action) =>{
            action.payload.map(item => state.data.books.items.push(item))
            console.log(state.data.books.items)
            state.state.buttonLoad = false
        })
    })
})

export default booksSlice.reducer;
export const {setOrder, setCategory, setSearchQuery, setCategoriesAndDescription, setStartIndex} = booksSlice.actions;
