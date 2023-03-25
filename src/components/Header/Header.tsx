import React from 'react';
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import SearchInput from "../UI/SearchInput/SearchInput";
import classes from './Header.module.scss'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {grey} from "@mui/material/colors";
import Categories from '../../types/ModelsForSelect/selectCategory';
import sortObj from "../../types/ModelsForSelect/selectSort";
import {useBookDispatch, useBookSelector} from "../../store";
import {setCategory, setOrder, setSearchQuery} from '../../store/booksReducer';


const Header = () => {
    const dispatch = useBookDispatch()
    const category = useBookSelector(state => state.books.data.category)
    const searchStr = useBookSelector(state => state.books.data.search)
    const order = useBookSelector(state => state.books.data.order)
    const dispatchCategory = (value: string) =>{
        dispatch(setCategory(value))
    }

    const dispatchOrder = (value: string) => {
        dispatch(setOrder(value))
    }
    const dispatchSearch = (value: string) => {
        dispatch(setSearchQuery(value))
    }
    return (
        <div className={classes.headerCl}>
            <div className={classes.iconCl}>
                <LocalLibraryIcon  sx={{ fontSize: 70,  color: grey[50] }} />
            </div>
            <div className={classes.selectSearch}>
                <div className={classes.select}>
                    <SelectComponent title={Categories.title}
                                     data={Categories.data}
                                     value={category}
                                     setter={dispatchCategory}
                    />
                    <SelectComponent title={sortObj.title}
                                     data={sortObj.data}
                                     value={order}
                                     setter={dispatchOrder}
                    />
                </div>
                 <SearchInput value={searchStr} setter={dispatchSearch}/>
            </div>
        </div>
    );
};

export default Header;