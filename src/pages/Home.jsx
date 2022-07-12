import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ItemsList } from "../components/ItemsList";
import { AppContext } from "../context/AppProvider";
import { NotFoundPage } from "./NotFound";

export function HomePage() {
  const { movies, filterByCategoryAndTitle } = useContext(AppContext);
  // get params from url
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let searchQueries = [];
    // http://localhost:3000/?category=Action&term=cure
    /// searchParams: [["category", "Action"], ["term", "cure"]] 
    for (const entry of searchParams.entries()) {
      searchQueries[entry[0]] = entry[1];
    }
    filterByCategoryAndTitle(searchQueries);
  }, [searchParams]);

  return (
    <div className="movie-list py-10 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 px-4 md:px-0">
          {movies ? <ItemsList data={movies} /> : <NotFoundPage />}
        </div>
      </div>
    </div>
  );
}

