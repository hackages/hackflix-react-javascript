import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppProvider";

export function BookMarkedItem() {
  const { bookmarkCount } = useContext(AppContext);
  console.log(bookmarkCount);

  return (
    <>
      <div className="bookmarks">
        <a className="bookmark-nav py-3 mr-5" href={"/Bookmarks"}>
          Bookmark
          <span className="badge text-red-700"> ({bookmarkCount})</span>
        </a>
      </div>
    </>
  );
}
