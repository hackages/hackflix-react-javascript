import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export function Filter(props) {
  let [searchParams, setSearchParams] = useSearchParams();

  const context = useContext(AppContext);

  return (
    <ul className="md:flex md:justify-center bg-gray-900 ease-in-out">
      {props.items.map((category) => (
        <li
          key={category.name}
          onClick={() => setSearchParams({ category: category.name })}
          className={`px-5 md:px-3 py-3 cursor-pointer hover:bg-red-700 duration-200 ${context.selectedCategory === category.name ? "bg-red-700" : ""
            }`}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
