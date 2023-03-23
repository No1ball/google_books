import React from 'react';
import classes from "./App.module.scss";
import FetchBooks from "./API/booksApi";
import Header from "./components/Header/Header";

function App() {
  FetchBooks.getAllBooks();
  return (
    <div className={classes.App}>
      <Header/>
    </div>
  );
}

export default App;
