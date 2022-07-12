import { createContext, useState } from "react";

import { filterMovieByTitle, filterMovieByCategoryName } from "../utils";

import { movies } from "../../mocks";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Action");

  const [moviesToShow, updateMovies] = useState(movies);

  function filterByTitle(searchTerm, movies) {
    return filterMovieByTitle(movies, searchTerm);
  }

  function filterByCategoryAndTitle(searchParams) {
    const moviesFilteredByCategory = filterByCategory(searchParams["category"] || "", movies);
    const filteredMovies = filterByTitle(searchParams["term"] || "", moviesFilteredByCategory);
    updateMovies(filteredMovies)
  }

  function filterByCategory(categoryName, movies) {
    if (categoryName !== "All" || categoryName !== "") {
      return filterMovieByCategoryName(movies, categoryName);
    }
    return movies
  }

  function getMovieById(id) {
    return movies.find((movie) => movie.id === parseInt(id));
  }

  function selectFilter(selectedFilter) {
    setSearchParams(params);
    setSelectedCategory(selectedFilter);
    filterByCategory(selectedFilter || "Any");
  }

  function bookMark(bookMarkedMovie){
    const newMovies = moviesToShow.map(movie => {
      return {
        ...movie,
        bookmarked: movie.id === bookMarkedMovie.id? !movie.bookmarked: movie.bookmarked
      }
    })
    updateMovies(newMovies)
  }

  console.log({moviesToShow});
  return (
    <AppContext.Provider
      value={{
        movies: moviesToShow,
        selectFilter,
        selectedCategory,
        filterByCategoryAndTitle,
        filterByCategory,
        getMovieById,
        bookMark,
        numberOfBookmarkedMovies: moviesToShow.filter(movie => movie.bookmarked).length
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
