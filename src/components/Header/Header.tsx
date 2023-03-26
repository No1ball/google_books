import React from 'react';
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import SearchInput from "../UI/SearchInput/SearchInput";
import classes from './Header.module.scss'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {grey} from "@mui/material/colors";
import Categories from '../../types/ModelsForSelect/selectCategory';
import sortObj from "../../types/ModelsForSelect/selectSort";
import {useBookDispatch, useBookSelector} from "../../store";
import {fetchByQuery, setCategory, setOrder, setSearchQuery} from '../../store/booksReducer';
import {SelectChangeEvent} from "@mui/material";
import {useHistory} from "react-router";


const Header = () => {
    const dispatch = useBookDispatch()
    const category = useBookSelector(state => state.books.data.category)
    const searchStr = useBookSelector(state => state.books.data.search)
    const order = useBookSelector(state => state.books.data.order)
    const router = useHistory();
    const handleChangeCategory = (setter: (value: string) => void) => (e:SelectChangeEvent<string>) => {
        setter(e.target.value)
        dispatch(fetchByQuery({category: e.target.value, search:searchStr, order}))
        router.push('/books')
    }
    const handleChangeOrder =  (setter: (value: string) => void) =>(e:SelectChangeEvent<string>) => {
        setter(e.target.value)
        dispatch(fetchByQuery({category, search:searchStr, order:e.target.value}))
        router.push('/books')
    }
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
                <div className={classes.title}>Books App</div>
                <div className={classes.iconCl}>
                    <LocalLibraryIcon  sx={{ fontSize: 70,  color: grey[50] }} />
                </div>
            <div className={classes.selectSearch}>
                <div className={classes.select}>
                    <SelectComponent title={Categories.title}
                                     data={Categories.data}
                                     value={category}
                                     setter={dispatchCategory}
                                     handleChange={handleChangeCategory(dispatchCategory)}
                    />
                    <SelectComponent title={sortObj.title}
                                     data={sortObj.data}
                                     value={order}
                                     setter={dispatchOrder}
                                     handleChange={handleChangeOrder(dispatchOrder)}
                    />
                </div>
                <div className={classes.search}>
                    <SearchInput value={searchStr} setter={dispatchSearch}/>
                </div>
            </div>
        </div>
    );
};

export default Header;