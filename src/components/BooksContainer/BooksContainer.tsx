import React, {useEffect, useState} from 'react';
import {useBookDispatch, useBookSelector} from "../../store";
import BookCard from '../UI/BookCard/BookCard';
import classes from "./BooksContainer.module.scss";
import LoadButton from "../UI/LoadButton/LoadButton";
import {useHistory} from "react-router";
import { fetchMoreBooks, setCategoriesAndDescription, setStartIndex} from "../../store/booksReducer";


const BooksContainer = () => {
    const booksArr = useBookSelector(state => state.books.data.books.items)
    const state = useBookSelector(state => state.books.state.isLoading)
    const buttonState = useBookSelector(state => state.books.state.buttonLoad)
    const [booksArray, setBooksArray] = useState<any[]>([])
    const dispatch = useBookDispatch()
    const router = useHistory();
    useEffect(()=>{
        setBooksArray(booksArr)
    },[state, buttonState])
    console.log(booksArr)
    const direct = (id:string, item: any) => (event: React.MouseEvent)=> {
        dispatch(setCategoriesAndDescription({
            categories: item.volumeInfo?.categories,
            description: item.volumeInfo?.description,
        }))
        router.push(`book/${id}`)
    }
    const category = useBookSelector(state => state.books.data.category)
    const search = useBookSelector(state => state.books.data.search)
    const order = useBookSelector(state => state.books.data.order)
    const startIndex = useBookSelector(state => state.books.state.startIndex)

    const clickHandler = (e: React.MouseEvent) =>{
        e.preventDefault()
        dispatch(fetchMoreBooks({category, order, search, startIndex}))
        dispatch(setStartIndex())
    }
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
                                func={direct(item.id, item)}
                            />
                        )}

                    </div>
                    <div className={classes.button}>
                        <LoadButton func={clickHandler}/>
                    </div>
                </div>
                :
                <h1>Книги не найдены</h1>
            }
        </div>
    )
};

export default BooksContainer;