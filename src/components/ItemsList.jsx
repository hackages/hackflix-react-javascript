import { Item } from "./Item";

export function ItemsList({ data }) {
  return (
    <>
      {data.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
}
