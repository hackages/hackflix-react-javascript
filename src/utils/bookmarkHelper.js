export function addToBookmarked(movie) {
  movie.bookmarked = true;
  console.log(movie);
  return movie;
}

export function removeBookmarked(movie) {
  movie.bookmarked = false;
  console.log(movie);
  return movie;
}

export function updateBookmark(movie) {
  return movie.bookmarked ? removeBookmarked(movie) : addToBookmarked(movie);
}

export function filteredBookmarkedMovies(movies) {
  const bookmarked = movies.filter((movie) => movie.bookmarked);
  return bookmarked;
}
