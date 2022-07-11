import { createContext, useState } from "react";

import { filterMovieByTitle, filterMovieByCategory } from "../utils";

import { movies } from "../../mocks";
import { getLocalStorage } from "../utils/localStorageHelper";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Action");

  const [moviesToShow, updateMovies] = useState(movies);

  function filterByTitle(searchTerm) {
    const filteredMovies = filterMovieByTitle(movies, searchTerm);
    updateMovies(filteredMovies);
  }

  function filterByCategoryAndTitle(searchParams) {
    console.log(searchParams);
    filterByTitle(searchParams["term"] || "");
    filterByCategory(searchParams["category"] || "");
  }

  function filterByCategory(categories) {
    if (categories) {
      const filteredMovies = filterMovieByCategory(movies, categories);
      updateMovies(filteredMovies);
    }
  }

  function getMovieById(id) {
    return movies.find((movie) => movie.id === parseInt(id));
  }
  function selectFilter(selectedFilter) {
    setSelectedCategory(selectedFilter);
  }

  return (
    <AppContext.Provider
      value={{
        movies: moviesToShow,
        filterByTitle,
        searchQuery,
        selectFilter,
        selectedCategory,
        filterByCategoryAndTitle,
        filterByCategory,
        filterByTitle,
        getMovieById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
