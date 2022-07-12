import { useEffect } from "react";
import { useState } from "react";

export function useServerData() {
  const [movies, setMovies] = useState([]);

  const [fetching, setFetching] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFetching(true);

    const urls = [
      "https://hackflix-api-with-nextjs.vercel.app/api/movies",
      "https://hackflix-api-with-nextjs.vercel.app/api/genres",
      "https://hackflix-api-with-nextjs.vercel.app/api/categories",
    ];

    const requests = urls.map((url) => fetch(url));

    Promise.all(requests)
      .then((responses) => {
        return responses.map((response) => response.json());
      })
      .then((data) => {
        // setMovies(data[0].then(data => data.movies));
        /*       setInitialMovies(data[0]);
        setGenres(data[1]);

        setCategories(data[2]); */
        data[0].then((data) => setMovies(data.movies));
        data[0].then((data) => setInitialMovies(data.movies));
        data[1].then((data) => setGenres(data.genres));
        data[2].then((data) => setCategories(data.categories));
        console.log(categories);
        setFetching(false);
      });
  }, []);
  console.log(categories);

  return {
    initialMovies,
    movies,
    setMovies,
    fetching,
    genres,
    categories,
  };
}
