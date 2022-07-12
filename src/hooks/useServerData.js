import { useEffect } from "react";
import { useState } from "react";

export function useServerData() {
  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  useEffect(() => {
    setFetching(true);
    fetch("https://hackflix-api-with-nextjs.vercel.app/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setInitialMovies(data.movies);
        setFetching(false);
      });
  }, []);

  return {
    initialMovies,
    movies,
    setMovies,
    fetching,
  };
}
