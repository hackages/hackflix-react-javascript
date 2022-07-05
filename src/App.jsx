import React from 'react'
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  DetailsPage,
  BookmarksPage } from './pages'

import {Header} from './components'
import {Footer} from './components'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      {/* <React.Fragment>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/bookmarks'}>Bookmarks</Link>
        <Link to={'/movies/details/78969fdmlsqkfj'}>Movie Details</Link>
        <Link to={'/oops'}>Oops</Link>
      </React.Fragment> */}
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
}

export default App
