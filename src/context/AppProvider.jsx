import { createContext, useState } from "react";
import { movies } from "../../mocks";
import { filterMovieByTitle, filterMovieByCategory } from "../utils";

export const AppContext = createContext();

export function AppProvider({ children }) {
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

  return (
    <AppContext.Provider
      value={{
        movies: moviesToShow,
        filterByTitle,
        filterByCategory,
        filterByCategoryAndTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
