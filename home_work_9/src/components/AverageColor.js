export default function AverageColor({ r, g, b }) {
  const getAverage = (arr) => {
    const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;

    return Math.floor(average);
  };

  return (
    <div className="output">
      <span>Average colors:</span><span>{getAverage(r)} {getAverage(g)} {getAverage(b)}</span>
    </div>
  );
}
