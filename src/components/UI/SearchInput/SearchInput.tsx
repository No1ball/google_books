import React from 'react';
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchInput.module.scss";
const SearchInput = () => {
    const handler = () =>{
        alert("Ff")
    }
    return (
        <div className={classes.searchCl}>
            <FormControl variant="filled">
                <InputLabel htmlFor="input-with-icon-adornment">Amount</InputLabel>
                <FilledInput
                    id="input-with-icon-adornment"
                    endAdornment={<InputAdornment position="start"><SearchIcon onClick={handler}/></InputAdornment>}
                />
            </FormControl>
        </div>
    );
};

export default SearchInput;