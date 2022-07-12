import { useState } from "react";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export function Filter(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [urlParams, setUrlsParams] = useState({})

  useEffect(() => {
    let params = {}
    for (const entry of searchParams.entries()) {
      params[entry[0]] = entry[1] 
      if(entry[0] === "category"){
        setSelectedCategory(entry[1])
      }
    }
    setUrlsParams(params)
  }, [searchParams]);

  return (
    <ul className="sm:flex sm:justify-center bg-gray-900 ease-in-out">
      {props.items.map((category) => (
        <li
          key={category.name}
          onClick={() => setSearchParams({...urlParams, category: category.name })}
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
