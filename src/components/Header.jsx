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
          <div className="sm:flex md:justify-end items-center sm:text-right lg:w-1/2 md:w-3/4 w-full">
            {/* <form className="flex mr-5 lg:mr-10">
                            <input type="search" name="hackflix-search" class="search"></input>
                        </form> */}
            <SearchItems></SearchItems>
            <div className="bookmarks">
              <Link className="bookmark-nav py-3 mr-5" to={`/bookmarks`}>
                Bookmarks
                <span className="badge text-red-700">
                  {" "}
                  ({context.numberOfBookmarkedMovies})
                </span>
              </Link>
            </div>
            {/*<Bookmarks></Bookmark>*/}
          </div>
        </div>
      </div>
    </header>
  );
}
