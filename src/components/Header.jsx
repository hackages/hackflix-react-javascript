import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import { Logo } from "./Logo";
import { SearchItems } from "./Search";
import { Link } from "react-router-dom";

export function Header() {
  const context = useContext(AppContext);
  return (
    <header className="py-10 text-white">
      <div className="container mx-auto">
        <div className="md:flex md:items-center md:justify-between px-4 md:p-0">
          <NavLink to="/">
            <Logo></Logo>
          </NavLink>
          <div className="md:flex md:justify-end sm:items-center md:text-right lg:w-7/12 md:w-3/4 w-full mb-5 md:mb-0">
            <SearchItems></SearchItems>
            <div className="bookmarks mt-5 md:mt-0 mb-5 md:mb-0 md:mx-3">
              <Link className="bookmark-nav py-3" to={`/bookmarks`}>
                Bookmarks
                <span className="badge text-red-700">
                  {" "}
                  ({context.numberOfBookmarkedMovies})
                </span>

              </Link>
            </div>
            <button className="bg-red-700 border border-red-700 hover:bg-transparent hover:border hover:border-red-700 hover:text-red-700 text-white py-3 px-7 md:ml-2 rounded transition-all duration-200">login</button>
            {/*<Bookmarks></Bookmark>*/}
          </div>
        </div>
      </div>
    </header>
  );
}
