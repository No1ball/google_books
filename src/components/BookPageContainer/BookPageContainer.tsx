import React, {useEffect, useState} from 'react';
import {useBookSelector} from "../../store";
import CurrentBook from "../../types/booksInterface/CurrentBook";
import classes from './BookPageContainer.module.scss'

const BookPageContainer = () => {
    const bookSelect = useBookSelector(state => state.books.data.currentBook)
    const isLoading = useBookSelector(state => state.books.state.isLoading)
    const [categories, setCategories] = useState<string[]>()
    const [description, setDescription] = useState<string>()
    const selectCategories = useBookSelector(state => state.books.data.categories)
    const selectDescription = useBookSelector(state => state.books.data.description)
    const [book, setBook] = useState<CurrentBook>()
    useEffect(()=>{
        setBook(bookSelect)
        if(bookSelect.volumeInfo.categories)
            setCategories(bookSelect.volumeInfo.categories)
        else
            setCategories(selectCategories)
        if(bookSelect.volumeInfo.description)
            setDescription(bookSelect.volumeInfo.description)
        else
            setDescription(selectDescription)

    },[isLoading])

    return (
        <div className={classes.wrapper}>
            {book ?
                <div>
                    <div className={classes.categories}>
                        {categories?.length ?
                            <p>
                                {categories.map((item, i)=>
                                    <span key={i}>
                                            { categories && i !== categories.length - 1 ?
                                                <span> {item},</span>
                                                :
                                                <span> {item}</span> }
                                        </span>
                                )}
                            </p> : false
                        }
                    </div>

                    <div className={classes.imgBlock}>
                        <img src={`${book?.volumeInfo.imageLinks?.thumbnail}`}  alt={'book'}/>
                    </div>
                    <div className={classes.content}>
                        <p>
                            <div className={classes.title}>
                                {book?.volumeInfo.title}
                            </div>
                        </p>

                        {book.volumeInfo.authors ?
                            <div className={classes.author}>
                            <p>
                            {book.volumeInfo.authors.map((item, i)=>
                                <span key={i}>
                                            { book.volumeInfo.authors && i !== book.volumeInfo.authors.length - 1 ?
                                                <span className={classes.textCl}> {item},</span>
                                                :
                                                <span className={classes.textCl}> {item}</span> }
                                        </span>
                            )}</p>
                            </div>:
                                false
                        }
                        {description ?
                        <p>
                            <div className={classes.description}>
                                <span>Description: </span>
                            </div>
                            <div className={classes.descriptionText}> {description} </div>
                        </p>:false
                        }
                    </div>

                </div>
                :
                false
            }

        </div>
    );
};

export default BookPageContainer;