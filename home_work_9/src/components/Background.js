export default function Background({ r, g, b }) {
  return (
    <div className="output">
      <span>Curent colors: </span><span>{r.at(-1)} {g.at(-1)} {b.at(-1)}</span>
    </div>
  );
}