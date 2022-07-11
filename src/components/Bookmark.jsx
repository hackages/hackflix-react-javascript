import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppProvider";

export function BookMarkedItem(movie) {
  const { bookmarkCount } = useContext(AppContext);

  return (
    <>
      <div className="bookmarks">
        <a className="bookmark-nav py-3 mr-5" href={"/Bookmarks"}>
          Bookmarks
          <span className="badge text-red-700"> ({bookmarkCount})</span>
        </a>
      </div>
    </>
  );
}
