import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {

  let navigate = useNavigate();
  function homeLink() {
    navigate('/')
  }

  return (
    <div className="not-found-page py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center px-4 md:px-0 text-center">
          <img src="https://eerstehulpopweg.brussels/public/img/404.gif" />
          <h1 className="text-4xl mt-10 font-bold">Oops, 404! Page not found.</h1>
          <div className="text-2xl mt-5">
            Go back to the Home Page
          </div>
          <button onClick={homeLink} className="bg-red-700 font-bold py-3 px-7 rounded mt-5 hover:bg-transparent hover:border hover:border-red-700 border border-red-700 transition-all duration-300">Home</button>
        </div>
      </div>
    </div>
  )
}