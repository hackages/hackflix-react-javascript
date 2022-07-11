import { createContext, useState } from "react";
import { movies } from "../../mocks";
import { filterMovieByTitle } from "../utils/filterMoviesByTitle";
import { filterMovieById } from "../utils/filterMovieById";
import { filterMovieByCategory } from "../utils/filterMoviesByCategory";
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [moviesToShow, updateMovies] = useState(movies);

  function filterByTitle(searchTerm) {
    const filteredMovies = filterMovieByTitle(movies, searchTerm);
    updateMovies(filteredMovies);
  }

  function filterById(movieId) {
    const filteredMovie = filterMovieById(movies, movieId);
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

  return (
    <AppContext.Provider
      value={{
        movies: moviesToShow,
        filterByTitle,
        filterByCategory,
        filterById,
        filterByCategoryAndTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
