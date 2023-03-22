import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, {useState} from 'react';

const Header = () => {
    const [categories, setCategories] = useState()
    const handleChange = () => {

    }
    return (
        <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categories}
                    label="Categories"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Header;