import React, {useState} from 'react';
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import SearchInput from "../UI/SearchInput/SearchInput";
import classes from './Header.module.scss'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {grey} from "@mui/material/colors";

import Categories from '../../ModelsForSelect/selectCategory';
import sortObj from "../../ModelsForSelect/selectSort";


const Header = () => {
    const [category, setCategory] = useState<string>('all')
    const [sort, setSort] = useState<string>('relevance')
    const [searchStr, setSearchStr] = useState<string>('')
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
                                     setter={setCategory}
                    />
                    <SelectComponent title={sortObj.title}
                                     data={sortObj.data}
                                     value={sort}
                                     setter={setSort}
                    />
                </div>
                 <SearchInput value={searchStr} setter={setSearchStr}/>
            </div>
        </div>
    );
};

export default Header;