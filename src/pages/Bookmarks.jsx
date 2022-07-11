import { useContext } from "react";
import { ItemsList } from "../components/ItemsList";
import { AppContext } from "../context/AppProvider";

export function BookmarksPage(){
  const { movies } = useContext(AppContext);

  return (
    <div className="movie-list py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          <ItemsList data={movies} />
          <button class="remove-bookmark block text-center py-2 mt-4 w-full">Remove Bookmark</button>
        </div>
      </div>
    </div>
  );
}