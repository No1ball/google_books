import React from 'react';
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchInput.module.scss";

interface Props{
    setter: (text: string) => void,
    value: string
}
const SearchInput = (props: Props) => {
    const handler = (e: React.FormEvent) =>{
        e.preventDefault()
        alert("Ff")

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