import React, { useEffect } from 'react';
import {Provider} from "react-redux";
import { store } from './store';
import {fetchAllBooks} from "./store/booksReducer";
import {BrowserRouter ,Redirect,Route, Switch} from "react-router-dom";
import MainBooks from "./Pages/MainBooks";
import BookPage from "./Pages/BookPage";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
    useEffect(()=>{
        store.dispatch(fetchAllBooks())
    }, [])
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
  return (
      <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
              <BrowserRouter>
                  <Header/>
                    <Switch>
                        <Route path={'/books'} component={MainBooks}></Route>
                        <Route path={`/book/:id`} component={BookPage}></Route>
                        <Redirect to={'/books'}/>
                    </Switch>
              </BrowserRouter>
          </ThemeProvider>
      </Provider>
  );
}

export default App;
