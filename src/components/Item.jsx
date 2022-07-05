export function Item({ item }) {
  return (
    <div className="single-movie relative">
      <span className="text-3xl font-bold">{item.title}</span>
    </div>
  )
}
