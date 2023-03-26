import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import classes from "./SelectComponent.module.scss";


interface DataInArray {
    value: string,
    name: string
}

interface Props {
    title: string,
    data: DataInArray[],
    value: string
    setter: (newState: string) => void,
    handleChange: (e:SelectChangeEvent<string>) => void
}
const SelectComponent = (props: Props) => {
    return (
        <div className={classes.selectCl}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label="Categories"
                    onChange={props.handleChange}
                >
                    {props.data.map(( item,i) =>
                        <MenuItem key={i} value={item.value}> {item.name} </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectComponent;