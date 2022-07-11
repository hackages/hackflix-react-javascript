import { useContext } from "react";
import { Item } from "../components/Item";
import { AppContext } from "../context/AppProvider";

export function BookmarksPage(){
  const { movies } = useContext(AppContext);

  return (
    <div className="movie-list py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            {movies.filter(movie => movie.bookmarked).map((movie) => (
              <div className="single-movie-wrapper">
                <Item item={movie} />
                <button class="bg-red-700 rounded-sm block text-center py-2 mt-4 w-full transition-all duration-200 hover:opacity-70">Remove Bookmark</button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}