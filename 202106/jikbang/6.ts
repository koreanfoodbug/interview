function calcAvgHeight(data: { [name: string]: Person }): number | null {
  if (data) {
      if (Object.keys(data).length === 0) {
        return null;
      }
  }

  const heights = Object
    .values(data)
    .map((d) => d.height);

  const sum = heights.reduce((a, b) => a + b, 0);
  const avg = (sum / heights.length) || 0;

  return avg;
}

interface Person {
    height: number;
    weight: number;
}

let avgHeight = calcAvgHeight({
   Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});

console.log(avgHeight);