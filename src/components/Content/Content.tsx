import React from 'react';
import BooksContainer from '../BooksContainer/BooksContainer';
import BooksCountBlock from "../BooksCountBlock/BooksCountBlock";
import classes from './Content.module.scss'
const Content = () => {
    return (
        <div className={classes.contentCl}>
            <BooksCountBlock/>
            <BooksContainer/>
        </div>
    );
};

export default Content;