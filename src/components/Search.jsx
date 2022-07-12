import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export function SearchItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [urlParams, setUrlsParams] = useState({})

  useEffect(() => {
    let params = {}
    for (const entry of searchParams.entries()) {
        params[entry[0]] = entry[1] 
    }
    setUrlsParams(params)
  }, [searchParams]);
 
  function searchHandler(event) {
    event.preventDefault()
  
    setSearchParams(
      {...urlParams, term: event.target.value}
    )
  }

  return (
    <>
      <form className="flex mr-5 lg:mr-10 mb-5 sm:mb-0">
        <input
          type="search"
          className="search text-sm rounded-sm max-h-10"
          placeholder="search"
          value={urlParams["term"]}
          onChange={searchHandler}
        ></input>
      </form>
    </>
  );
}
