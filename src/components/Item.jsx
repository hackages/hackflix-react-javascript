export function Item({ item }) {
  return (
    <div className="single-movie relative">
      <img src={item.poster_path} />
      <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
        <div className="content-inner">
          <button class="bookmark p-1 inline-block absolute">Bookmark</button>
          <h3 class="mb-5">{item.title}</h3>
          <a class="details-btn inline-block" href={item.id}>View Details</a>
        </div>
      </div>
    </div>
  )
}
