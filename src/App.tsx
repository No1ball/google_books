import React, { useEffect } from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Content from './components/Content/Content';
import {Provider} from "react-redux";
import { store } from './store';
import {fetchAllBooks} from "./store/booksReducer";

function App() {
    useEffect(()=>{
        store.dispatch(fetchAllBooks())
    }, [])
  return (
      <Provider store={store}>
            <div className={classes.App}>
                <Header/>
                <Content/>
            </div>
      </Provider>
  );
}

export default App;
