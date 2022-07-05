import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { HomePage, NotFoundPage, DetailsPage, BookmarksPage } from "./pages";

import { Header, Footer } from "./components";

function App() {
  return (
    <div className="text-white bg-black font-sans text-xl leading-snug font-normal">
      <BrowserRouter>
        <Header></Header>
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
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App;