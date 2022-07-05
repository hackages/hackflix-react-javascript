import { Children, createContext } from "react";
import { movies } from "../../mocks";

export const AppContext = createContext();

function getMovieById(id) {
  return movies.filter((movie) => id == movie.id);
}

function getAllMovies() {
  return movies;
}

const contextData = {
  getMovieById,
  getAllMovies,
};

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
