import { useContext } from "react";
import { ItemsList } from "../components/ItemsList";
import { AppContext } from "../context/AppProvider";

export function BookmarksPage() {
  const { movies } = useContext(AppContext);

  return (
    <div className="container bg-black text-white">
      <ItemsList data={movies.filter((movie) => (movie.bookmarked = true))} />
    </div>
  );
}
