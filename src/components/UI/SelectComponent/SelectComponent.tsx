import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import classes from "./SelectComponent.module.scss";
const SelectComponent = () => {
    const [categories, setCategories] = useState()
    const handleChange = () => {

    }
    return (
        <div className={classes.selectCl}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categories}
                    label="Categories"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>History</MenuItem>
                    <MenuItem value={20}>Adventure</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectComponent;