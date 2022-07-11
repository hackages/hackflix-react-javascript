export function addToBookmarked(movie) {
  return [...movie, { bookmarked: true }];
}

export function removeBookmarked(movie) {
  return [...movie, { bookmarked: false }];
}

export function filteredBookmarkedMovies(movies) {
  const bookmarked = movies.filter((movie) => movie.bookmarked);
  return bookmarked;
}
