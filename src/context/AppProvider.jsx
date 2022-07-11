import { createContext, useState } from "react";

import { filterMovieByTitle, filterMovieByCategoryName } from "../utils";

import { movies } from "../../mocks";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Action");

  const [moviesToShow, updateMovies] = useState(movies);

  function filterByTitle(searchTerm) {
    setSearchQuery(searchTerm);
    const filteredMovies = filterMovieByTitle(movies, searchTerm);
    updateMovies(filteredMovies);
  }

  function filterByCategoryAndTitle(searchParams) {
    console.log(searchParams);
    filterByCategory(searchParams["category"] || "");
    filterByTitle(searchParams["term"] || "");
  }

  function filterByCategory(categoryName) {
    if (categoryName === "All") {
      updateMovies(movies);
    } else if (categoryName) {
      const filteredMovies = filterMovieByCategoryName(movies, categoryName);
      updateMovies(filteredMovies);
    }
  }

  function getMovieById(id) {
    return movies.find((movie) => movie.id === parseInt(id));
  }

  function selectFilter(selectedFilter) {
    setSearchParams(params);
    setSelectedCategory(selectedFilter);
    filterByCategory(selectedFilter || "Any");
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
        getMovieById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
