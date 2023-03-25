import React, {useEffect, useState} from 'react';
import {useBookSelector} from "../../store";
import BookCard from '../UI/BookCard/BookCard';
import classes from "./BooksContainer.module.scss";
import LoadButton from "../UI/LoadButton/LoadButton";

const BooksContainer = () => {
    const booksArr = useBookSelector(state => state.books.data.books.items)
    const state = useBookSelector(state => state.books.state.isLoading)
    const [booksArray, setBooksArray] = useState<any[]>([])
    useEffect(()=>{
        setBooksArray(booksArr)
    },[state])
    return(
        <div className={classes.wrapper}>
            {booksArray.length > 0 ?
                <div>
                    <div className={classes.container}>
                        {booksArray.map((item,i) =>
                            <BookCard key={i}
                                title={item.volumeInfo.title}
                                imagePath={item.volumeInfo.imageLinks?.thumbnail}
                                authors={item.volumeInfo?.authors}
                                categories={item.volumeInfo?.categories}
                            />
                        )}

                    </div>
                    <div className={classes.button}>
                        <LoadButton/>
                    </div>
                </div>
                :
                false
            }
        </div>
    )
};

export default BooksContainer;