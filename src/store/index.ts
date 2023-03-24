import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";
import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";

export const store = configureStore({
    reducer:{
     books: booksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useBookSelector: TypedUseSelectorHook<RootState> = useSelector
export const useBookDispatch: () => Dispatch = useDispatch;