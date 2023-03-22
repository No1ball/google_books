import React from 'react';

import FetchBooks from "./API/booksApi";
import Header from "./components/Header/Header";

function App() {
  FetchBooks.getAllBooks();
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
