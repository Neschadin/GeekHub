import { useState } from "react";

export default function AverageColor({ r, g, b }) {
  const [counter, decrCounter] = useState(0);

  
  const averageValue = Math.floor((r + g + b) / (counter || 1));
  console.log(counter);



  return <span>Average colors:{averageValue}</span>;
}

// // 0 clicks - current rgbColor { red: 127, green: 127, blue: 127 }, then:
// averageColor = {
//   red: 127,
//   green: 127,
//   blue: 127
// }

// // 1 click - current rgbColor { red: 23, green: 234, blue: 135 }, then:
// averageColor = {
//   red: (127 + 23) / 2,
//   green: (127 + 234) / 2,
//   blue: (127 + 135) / 2
// }

// // 2 clicks - current rgbColor { red: 55, green: 147, blue: 21 } , then:
// averageColor = {
//   red: (127 + 23 + 55) / 3,
//   green: (127 + 234 + 147) / 3,
//   blue: (127 + 135 + 21) / 3
// }
