import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { HomePage, NotFoundPage, DetailsPage, BookmarksPage } from "./pages";

<<<<<<< HEAD
import { Header } from "./components";
=======
import {Header} from './components'
import {Footer} from './components'
>>>>>>> e0b600b7b5db5297c99b96315c9bd219ee7a9054

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        {/* <React.Fragment>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/bookmarks'}>Bookmarks</Link>
        <Link to={'/movies/details/78969fdmlsqkfj'}>Movie Details</Link>
        <Link to={'/oops'}>Oops</Link>
      </React.Fragment> */}
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<HomePage />}></Route>
          <Route path="bookmarks" element={<BookmarksPage />}></Route>
          <Route
            path="movies/details/:movieId"
            element={<DetailsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>  
        <Route path='movies' element={<HomePage/>}></Route>  
        <Route path='bookmarks' element={<BookmarksPage/>}></Route>  
        <Route path='movies/details/:movieId' element={<DetailsPage/>}></Route>  
        <Route path='*' element={<NotFoundPage/>}></Route>  
      </Routes>
      <Footer></Footer>
      </BrowserRouter> 
    </>
  )
>>>>>>> e0b600b7b5db5297c99b96315c9bd219ee7a9054
}

export default App;
