import React, {useState} from 'react';
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import SearchInput from "../UI/SearchInput/SearchInput";
const Header = () => {

    return (
        <div>
            
            <div>
                <SelectComponent/>
                <SelectComponent/>
            </div>
            <SearchInput/>
        </div>
    );
};

export default Header;