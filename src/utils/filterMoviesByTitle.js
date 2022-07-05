export function filterMovieByTitle(movies, value) {
  return movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
}