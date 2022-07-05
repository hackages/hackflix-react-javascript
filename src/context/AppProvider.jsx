import { createContext } from "react";
import { movies } from "../../mocks";

export const AppContext = createContext();

function getMovieById(id) {
  return movies.filter((movie) => id == movie.id);
}

function filterMovieByTitle(value) {
  return movies.filter((movie) => movie.title.includes(value));
}

function getAllMovies() {
  return movies;
}

const contextData = {
  getMovieById,
  getAllMovies,
  filterMovieByTitle,
};

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
