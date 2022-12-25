export default function DominantColor({ r, g, b }) {
  r = r.at(-1);
  g = g.at(-1);
  b = b.at(-1);

  const dominantColor =
    r > g + b / 2
      ? "red"
      : g > r + b / 2
      ? "green"
      : b > g + r / 2
      ? "blue"
      : null;

  return (
    <div className="output">
      <span>{dominantColor ? "Dominant color is:" : "No dominant color"}</span>
      <span>{dominantColor ?  dominantColor : null}</span>
    </div>
  );
}