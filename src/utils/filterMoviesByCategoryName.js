import { genres, categories } from "../../mocks";

export function filterMovieByCategoryName(movies, categoryName) {
  // get the genreid from categoryname
  const genre = genres.find((genre) => genre.name === categoryName);

  if (genre) {
    return movies.filter((movie) => movie.genre_ids.includes(genre.id));
  }
  return movies;
}
