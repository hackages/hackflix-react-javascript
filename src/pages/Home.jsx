import { useContext } from "react";
import { ItemsList } from "../components/ItemsList";
import { AppContext } from "../context/AppProvider";

export function HomePage() {
  const { movies } = useContext(AppContext);

  return (
    <div className="container mx-auto">
      <ItemsList data={movies} />
    </div>
  );
}
