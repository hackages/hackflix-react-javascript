import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function HomePage() {
  const data = useContext(AppContext);

  return (
    <>
      <h1>Home</h1>
      {data.getAllMovies().map((item) => (
        <p>{item.title}</p>
      ))}
      {/* {JSON.stringify(data.getMovieById(329865))} */}
    </>
  );
}
