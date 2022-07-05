import { createContext, useState } from "react";
import { movies } from "../../mocks";
import { filterMovieByTitle } from "../utils/filterMoviesByTitle";

export const AppContext = createContext();
  
export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [moviesToShow, updateMovies] = useState(movies)
  
  function filterByTitle(searchTerm) {
    const filteredMovies = filterMovieByTitle(movies, searchTerm)
    setSearchQuery(searchTerm)
    updateMovies(filteredMovies)
  }


  return (
    <AppContext.Provider value={{movies: moviesToShow, filterByTitle}}>
      {children}
    </AppContext.Provider>
  );
}
