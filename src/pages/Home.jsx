import { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ItemsList } from "../components/ItemsList";
import { AppContext } from "../context/AppProvider";

export function HomePage() {
  const { movies, filterById, filterByCategory, filterByCategoryAndTitle } =
    useContext(AppContext);
  // get params from url

  let [searchParams] = useSearchParams();

  useEffect(() => {
    let searchQueries = [];
    for (const entry of searchParams.entries()) {
      searchQueries[entry[0]] = entry[1];
    }

    filterByCategoryAndTitle(searchQueries);
  }, [searchParams]);

  // let searchQueries = [];
  // for (const entry of searchParams.entries()) {
  //   searchQueries[entry[0]] = entry[1];
  // }
  // console.log(searchQueries);

  return (
    <div className="movie-list py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          <ItemsList data={movies} />
        </div>
      </div>
    </div>
  );
}
