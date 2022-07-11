import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { movies, genres } from '../../mocks';
import { AppContext } from '../context/AppProvider';

export function DetailsPage() {
  const params = useParams()
  const movieId = params.movieId
  const { getMovieById } = useContext(AppContext)
  const movie = getMovieById(movieId)

  const genresNames = movies[0].genre_ids.map(genreId => {
    const genre = genres.find(g => g.id === genreId)
    if (genre) {
      return genre.name
    }
    return null
  })

  return (
    <section className="wrapper">
      <div className="movie-list py-20">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className='details-image mr-5 rounded-md overflow-hidden'>
              <img src={movie.poster_path} />
            </div>
            <div className="details-content ml-5">
              <h1 className="mb-5 text-4xl font-bold">{movie.title}</h1>
              <p className="text-sm opacity-75 mb-5">{movie.overview}</p>
              <p className='mb-5'>{genresNames.join(' / ')}</p>
              <button className="bg-red-600 hover:bg-red-900 text-white py-3 px-8 rounded transition-all duration-200 inline-block">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}