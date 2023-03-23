import React from 'react';
import classes from "./App.module.scss";
import FetchBooks from "./API/booksApi";
import Header from "./components/Header/Header";
import Content from './components/Content/Content';

function App() {
  FetchBooks.getAllBooks();
  return (
    <div className={classes.App}>
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
