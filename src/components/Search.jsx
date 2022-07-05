import { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

export function SearchItems() {
  const context = useContext(AppContext);
  const [items, setItems] = useState(context.getAllMovies());

  function searchHandler(event) {
    const searchItems = context.filterMovieByTitle(event.target.value);
    setItems(searchItems);
  }

  return (
    <>
      <form className="flex mr-5 lg:mr-10">
        <input
          type="search"
          class="search"
          name="hackflix-search"
          placeholder="search"
          onChange={searchHandler}
        ></input>
      </form>
    </>
  );
}
