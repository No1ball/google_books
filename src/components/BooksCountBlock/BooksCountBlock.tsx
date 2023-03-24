import React from 'react';
import {useBookSelector} from "../../store";
import classes from './BooksCountBlock.module.scss'
const BooksCountBlock = () => {
    const count = useBookSelector(state => state.books.data.books.totalItems)
    return (
        <div className={classes.wrapper}>
            <div className={classes.countBlock}>
                Books count: {count}
            </div>
        </div>
    );
};

export default BooksCountBlock;