import React from 'react';
import BooksContainer from '../BooksContainer/BooksContainer';
import BooksCountBlock from "../BooksCountBlock/BooksCountBlock";
import classes from './Content.module.scss'
import {useBookSelector} from "../../store";
import Loader from "../UI/Loader/Loader";
const Content = () => {
    const isLoading = useBookSelector(state => state.books.state.isLoading)
    return (
        <div className={classes.contecntCl}>
            {isLoading ?
                <div>
                    <BooksCountBlock/>
                    <BooksContainer/>
                </div>
                :
                <div className={classes.loader}>
                    <Loader/>
                </div>
            }
        </div>
    );
};

export default Content;