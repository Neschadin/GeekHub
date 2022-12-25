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
    <span>
      {dominantColor
        ? `DominantColor is: ` + dominantColor
        : "No dominant color"}
    </span>
  );
}