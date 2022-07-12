import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function SearchItems() {
  const { filterByTitle, searchQuery } = useContext(AppContext);

  function searchHandler(event) {
    filterByTitle(event.target.value);
  }

  return (
    <>
      <form className="flex mr-5 lg:mr-10 mb-5 sm:mb-0">
        <input
          type="search"
          className="search text-sm rounded-sm max-h-10"
          name="term"
          placeholder="search"
          value={searchQuery}
          onChange={searchHandler}
        ></input>
      </form>
    </>
  );
}
