import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function bookMarkedItem() {
  const { filterByBookmark } = useContext(AppContext);
}
