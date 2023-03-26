import React from 'react';
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchInput.module.scss";
import {useBookDispatch, useBookSelector} from "../../../store";
import {fetchByQuery} from "../../../store/booksReducer";
import {useHistory} from "react-router";

interface Props{
    setter: (text: string) => void,
    value: string
}
const SearchInput = (props: Props) => {
    const dispatch = useBookDispatch();
    const category = useBookSelector(state => state.books.data.category)
    const search = useBookSelector(state => state.books.data.search)
    const order = useBookSelector(state => state.books.data.order)
    const router = useHistory()
    const handler = (e: React.FormEvent) =>{
        e.preventDefault()
        dispatch(fetchByQuery({category, search, order}))
        router.push('/books')
    }
    const inputHandler = (e:  React.ChangeEvent<HTMLInputElement>) =>{
        props.setter(e.target.value)
    }
    return (
        <div className={classes.searchCl}>
            <form onSubmit={handler}>
            <FormControl variant="filled" >
                <InputLabel htmlFor="input-with-icon-adornment">Title</InputLabel>
                <FilledInput
                    id="input-with-icon-adornment"
                    endAdornment={<InputAdornment position="start"><SearchIcon
                        onClick={handler}
                    /></InputAdornment>}
                    value={props.value}
                    onChange={inputHandler}
                    type={'text'}
                />
            </FormControl>
            </form>
        </div>
    );
};

export default SearchInput;