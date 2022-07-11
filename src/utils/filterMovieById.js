export function filterMovieById(movies, value) {
  return movies.find((movie) => movie.id === parseInt(value));
}
