import { Logo } from "./logo";

export function Header() {
    return (
        <header className="py-10 text-white">
            <div className="container mx-auto">
                <div className="sm:flex items-center justify-between">
                    <Logo></Logo>
                    <div className="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
                        <form className="flex mr-5 lg:mr-10">
                            <input type="search" name="hackflix-search" className="search"></input>
                        </form>
                        {/*<Search></Search>*/}
                        <div className="bookmarks">
                            <a className="bookmark-nav py-3 mr-5">
                                Bookmarks
                                <span className="badge"> (3)</span>
                            </a>
                        </div>
                        {/*<Bookmarks></Bookmark>*/}
                    </div>
                </div>
            </div>
        </header>
    )
}