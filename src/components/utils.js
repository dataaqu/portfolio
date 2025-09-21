// Generate points for inner and outer rings
const generateRingPoints = (radius, count, colors) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = (Math.random() - 0.5) * 2;
    
    points.push({
      idx: i,
      position: [x, y, z],
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  return points;
};

// Color palette for design theme
const colors = [
  "#22c55e", // green-500
  "#3b82f6", // blue-500
  "#8b5cf6", // violet-500
  "#f59e0b", // amber-500
  "#ef4444", // red-500
  "#06b6d4", // cyan-500
];

// Generate inner and outer ring points
export const pointsInner = generateRingPoints(2.5, 30, colors);
export const pointsOuter = generateRingPoints(4.5, 50, colors);