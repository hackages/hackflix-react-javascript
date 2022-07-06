export function NotFoundPage() {
  return (
    <div className="not-found-page py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src="https://eerstehulpopweg.brussels/public/img/404.gif" />
          <h1 className="text-4xl mt-10 font-bold">Oops, 404! Page not found.</h1>
          <div className="text-2xl mt-5">
            Go back to the Home Page
          </div>
          <a href="/" className="bg-red-700 font-bold py-3 px-7 rounded mt-5 hover:bg-transparent hover:border hover:border-red-700 border border-red-700 transition-all duration-300">Home</a>
        </div>
      </div>
    </div>
  )
}