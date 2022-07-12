import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import { useServerData } from "../hooks/useServerData";

export function DetailsPage() {
  const params = useParams();
  const movieId = params.movieId;
  const { getMovieById } = useContext(AppContext);
  const movie = getMovieById(movieId);
  const { genres, movies } = useServerData();
  const genresNames = movies[0].genre_ids.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    if (genre) {
      return genre.name;
    }
    return null;
  });

  let navigate = useNavigate();
  function homeLink() {
    navigate("/");
  }

  return (
    <section className="wrapper">
      <div className="movie-list py-10 md:py-20">
        <div className="container mx-auto">
          <div className="md:flex md:items-center px-5 md:px-0">
            <div className="details-image mb-10 md:mb-0 md:mr-5 rounded-md overflow-hidden md:max-w-xs xl:max-w-none">
              <img src={movie.poster_path} />
            </div>
            <div className="details-content md:ml-5">
              <h1 className="mb-5 text-4xl font-bold">{movie.title}</h1>
              <p className="text-sm opacity-75 mb-5">{movie.overview}</p>
              <p className="mb-5">{genresNames.join(" / ")}</p>
              <button className="bg-red-600 hover:bg-red-900 text-white py-3 px-8 rounded transition-all duration-200 inline-block">
                Watch
              </button>
              <button
                onClick={homeLink}
                className="bg-red-600 hover:bg-red-900 text-white py-3 px-8 rounded transition-all duration-200 inline-block ml-5"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
