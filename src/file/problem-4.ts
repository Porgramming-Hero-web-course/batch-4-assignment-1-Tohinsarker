interface Circle {
  shape: string;
  radius: number;
}
interface Rectangle {
  shape: string;
  height: number;
  width: number;
}

function calculateShapeArea(
  shape: string,
  radiusOrWith: number,
  height?: number
): number | string {
  console.log("circle", height);
  if (shape === "circle") {
    const result = Math.PI * radiusOrWith ** 2;
    const toFixed = result.toFixed(2);
    return parseFloat(toFixed);
  } else if (shape === "rectangle" && height !== undefined) {
    const result = radiusOrWith * height;
    const toFixed = result.toFixed(2);
    return parseFloat(toFixed);
  } else {
    return "wrong input";
  }
}

console.log(calculateShapeArea("rectangle", 5, 5));
