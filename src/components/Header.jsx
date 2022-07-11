import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchItems } from "./Search";

export function Header() {
  return (
    <header className="py-10 text-white">
      <div className="container mx-auto">
        <div className="sm:flex items-center justify-between">
          <NavLink to="/">
            <Logo></Logo>
          </NavLink>
          <div className="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
            {/* <form className="flex mr-5 lg:mr-10">
                            <input type="search" name="hackflix-search" class="search"></input>
                        </form> */}
            <SearchItems></SearchItems>
            <div className="bookmarks">
              <a className="bookmark-nav py-3 mr-5">
                Bookmarks
                <span className="badge text-red-700"> (3)</span>
              </a>
            </div>
            {/*<Bookmarks></Bookmark>*/}
          </div>
        </div>
      </div>
    </header>
  );
}
