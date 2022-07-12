import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { HomePage, NotFoundPage, DetailsPage, BookmarksPage, LoginPage } from "./pages";
import { categories } from "../mocks";

import { Header, Filter, Footer } from "./components";
import { useContext } from "react";
import { AppContext } from "./context/AppProvider";

function App() {
  const context = useContext(AppContext);

  return (
    <div className="text-white bg-black font-sans text-xl leading-snug font-normal min-h-screen">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<>
            <Filter items={categories}></Filter>
           <HomePage /> 
          </>}></Route>
          <Route path="movies" element={<HomePage />}></Route>
          <Route path="bookmarks" element={<>
            <Filter items={categories}></Filter>
           <BookmarksPage /> 
          </>}></Route>
          <Route
            path="movies/details/:movieId"
            element={<DetailsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
