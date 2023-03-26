import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import classes from "./SelectComponent.module.scss";
import {fetchByQuery} from "../../../store/booksReducer";
import {useHistory} from "react-router";
import {useBookDispatch, useBookSelector} from "../../../store";

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
    const dispatch = useBookDispatch();
    const category = useBookSelector(state => state.books.data.category)
    const search = useBookSelector(state => state.books.data.search)
    const order = useBookSelector(state => state.books.data.order)
    const router = useHistory()
    const handleChange = (e:SelectChangeEvent<string>) => {
        props.setter(e.target.value)
        dispatch(fetchByQuery({category, search, order}))
        router.push('/books')
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
                    {props.data.map(( item,i) =>
                        <MenuItem key={i} value={item.value}> {item.name} </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectComponent;