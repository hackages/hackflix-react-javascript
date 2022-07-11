import { createContext, useState } from "react";
import { movies, categories } from "../../mocks";
import { filterMovieByTitle } from "../utils/filterMoviesByTitle";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageHelper";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const initialSearchQuery = getLocalStorage("searchTerm");
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");
  const [selectedCategory, setSelectedCategory] = useState("Action");

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


  function getMovieById(id) {
    return movies.find(movie => movie.id === parseInt(id))}
  function selectFilter(selectedFilter) {
    setSelectedCategory(selectedFilter)

  }

  return (
    <AppContext.Provider

      value={{ movies: moviesToShow, filterByTitle, searchQuery, selectFilter, selectedCategory, getMovieById }}

    >
      {children}
    </AppContext.Provider>
  );
}
