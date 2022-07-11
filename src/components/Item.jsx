import { updateBookmark } from "../utils/bookmarkHelper";

export function Item({ item }) {
  function onClickHandler(item) {
    // item.bookmarked ? removeBookmarked(item) : addToBookmarked(item);
    updateBookmark(item);
  }

  return (
    <div className="single-movie relative border-2 border-black rounded-md relative overflow-hidden transition-all duration-300">
      <img src={item.poster_path} />
      <div className="movie-content flex items-center justify-center text-center opacity-0 invisible absolute w-full h-full inset-0 px-4 transition-all duration-300">
        <div className="content-inner">
          <button
            className="bookmark cursor-pointer bg-white text-black inline-block absolute text-sm rounded-sm hover:bg-green-600 transition-all duration-200 hover:text-white"
            onClick={() => {
              onClickHandler(item);
            }}
          >
            Bookmark
          </button>
          <h3 className="mb-5 font-bold text-2xl">{item.title}</h3>
          <a
            className="bg-red-700 border border-red-700 hover:bg-transparent hover:border hover:border-red-700 hover:text-red-700 text-white py-3 px-7 rounded transiti n-all duration-200 inline-block"
            href={item.id}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
