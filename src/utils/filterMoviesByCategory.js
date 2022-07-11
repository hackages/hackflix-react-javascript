export function filterMovieByCategory(movies, value) {
  return movies.filter((movie) => movie.genre_ids.includes(value));
}
