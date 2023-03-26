import React, {useEffect} from 'react';
import {useBookDispatch, useBookSelector} from "../../store";
import Loader from "../UI/Loader/Loader";
import BookPageContainer from "../BookPageContainer/BookPageContainer";
import {fetchBookById} from "../../store/booksReducer";
import {useParams} from "react-router";
import classes from './BookContent.module.scss'
const BookContent = () => {
    const isLoading = useBookSelector(state => state.books.state.isLoading)
    const params = useParams<{id: string}>()
    const id: string =  params?.id
    const dispatch = useBookDispatch()
    useEffect(()=>{
        dispatch(fetchBookById(id))
    }, [])
    return (
        <div className={classes.wrapper}>
            {isLoading ?
                <BookPageContainer/>
                :
                <Loader/>
            }
        </div>
    );
};

export default BookContent;