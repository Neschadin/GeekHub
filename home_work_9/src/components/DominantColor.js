export default function DominantColor({ r, g, b }) {
  const dominantColor = (r > g + b);
  return <span>DominantColor is: {`${dominantColor}`}</span>;
}

// If red > ( green + blue )  then the dominantColor is Red , 
// if green > (red + blue) / 2 - Green 
// etc.