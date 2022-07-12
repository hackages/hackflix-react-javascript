import { useFilter } from "../hooks/useFilter";

export function Filter(props) {
  const {selectedCategory, updateUrl} = useFilter()

  return (
    <ul className="sm:flex sm:justify-center bg-gray-900 ease-in-out">
      {props.items.map((category) => (
        <li
          key={category.name}
          onClick={() => updateUrl(category.name)}
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
