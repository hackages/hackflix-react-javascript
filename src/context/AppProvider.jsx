import { createContext, useState } from "react";
import { movies } from "../../mocks";
import { filteredBookmarkedMovies } from "../utils/bookmarkHelper";
import { filterMovieByTitle } from "../utils/filterMoviesByTitle";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageHelper";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const initialSearchQuery = getLocalStorage("searchTerm");
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");
  const [moviesToShow, updateMovies] = useState(
    filterMovieByTitle(movies, searchQuery) || movies
  );

  function filterByTitle(searchTerm) {
    const filteredMovies = filterMovieByTitle(movies, searchTerm);
    setSearchQuery(searchTerm);
    setLocalStorage("searchTerm", searchTerm);
    setLocalStorage("filteredMovies", filteredMovies);
    updateMovies(filteredMovies);
  }

  function filterByBookmarked() {
    const bookmarked = filteredBookmarkedMovies(movies);
    console.log(bookmarked.length);
    updateMovies(bookmarked);
  }

  function updateMovieBookmark(title) {
    // const thismovie = movies.find((movie) => {
    //   movie.title === ;
    //   updateBookmark(thismovie);
    // });
  }

  return (
    <AppContext.Provider
      value={{
        movies: moviesToShow,
        filterByTitle,
        searchQuery,
        filterByBookmarked,
        updateMovieBookmark,
        bookmarkCount: filteredBookmarkedMovies(movies).length,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
