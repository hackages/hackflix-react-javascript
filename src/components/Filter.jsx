import { useState } from "react";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export function Filter(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      if(entry[0] === "category"){
       setSelectedCategory(entry[1])
      }
    }
  }, [searchParams]);

  return (
    <ul className="flex justify-center bg-gray-900 ease-in-out">
      {props.items.map((category) => (
        <li
          key={category.name}
          onClick={() => setSearchParams({ category: category.name })}
          className={`px-3 py-3 cursor-pointer hover:bg-red-700 duration-200 ${
            selectedCategory === category.name ? "bg-red-700" : ""
          }`}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
