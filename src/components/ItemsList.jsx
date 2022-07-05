import { Item } from "./Item";

export function ItemsList({ data }) {
  return (
    <div className="grid gap-4">
      {data.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
