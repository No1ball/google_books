import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import classes from "./SelectComponent.module.scss";

interface DataInArray {
    value: string,
    name: string
}

interface Props {
    title: string,
    data: DataInArray[],
    value: string
    setter: (newState: string) => void
}
const SelectComponent = (props: Props) => {

    const handleChange = (e:any) => {
        props.setter(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className={classes.selectCl}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label="Categories"
                    onChange={handleChange}
                >
                    {props.data.map(item =>
                        <MenuItem value={item.value}> {item.name} </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectComponent;