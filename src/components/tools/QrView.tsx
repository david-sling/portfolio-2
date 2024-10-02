import { cn } from "@/utils/cn";
import QrCode from "@/utils/qr";
import { FC, ReactNode } from "react";

const getAdjacents = (
  matrix: number[][],
  x: number,
  y: number,
  options?: { min?: number; max?: number }
) => {
  const coords = {
    top: { x, y: y - 1 },
    right: { x: x + 1, y },
    bottom: { x, y: y + 1 },
    left: { x: x - 1, y },
  };
  const boundsExist = options?.min && options.max;

  const isTopWithinBounds = boundsExist
    ? coords.top.y < options.min! ||
      coords.top.y > options.max! ||
      coords.top.x < options.min! ||
      coords.top.x > options.max!
    : true;
  const top = isTopWithinBounds ? matrix[coords.top.y]?.[coords.top.x] : 0;

  const isRightWithinBounds = boundsExist
    ? coords.right.y < options.min! ||
      coords.right.y > options.max! ||
      coords.right.x < options.min! ||
      coords.right.x > options.max!
    : true;
  const right = isRightWithinBounds
    ? matrix[coords.right.y]?.[coords.right.x]
    : 0;

  const isBottomWithinBounds = boundsExist
    ? coords.bottom.y < options.min! ||
      coords.bottom.y > options.max! ||
      coords.bottom.x < options.min! ||
      coords.bottom.x > options.max!
    : true;
  const bottom = isBottomWithinBounds
    ? matrix[coords.bottom.y]?.[coords.bottom.x]
    : 0;

  const isLeftWithinBounds = boundsExist
    ? coords.left.y < options.min! ||
      coords.left.y > options.max! ||
      coords.left.x < options.min! ||
      coords.left.x > options.max!
    : true;
  const left = isLeftWithinBounds ? matrix[coords.left.y]?.[coords.left.x] : 0;
  return { top, right, bottom, left };
};

const getRoundedCorners = ({
  bottom,
  left,
  right,
  top,
}: ReturnType<typeof getAdjacents>) => {
  const bottomLeft = !bottom && !left;
  const bottomRight = !bottom && !right;
  const topLeft = !top && !left;
  const topRight = !top && !right;
  return { bottomLeft, bottomRight, topLeft, topRight };
};

export const QrView: FC<{
  content: string;
  size?: number;
  children?: ReactNode;
}> = ({ content, size = 500, children }) => {
  const matrix = (QrCode as any).generate(content, { minVersion: 3 })
    .buffer as number[];
  console.log(matrix);
  const matrixSize = Math.sqrt(matrix.length);
  const matrix2 = matrix.reduce((acc, cell, idx) => {
    const row = Math.floor(idx / matrixSize);
    if (!acc[row]) acc[row] = [];
    acc[row].push(cell);
    return acc;
  }, [] as number[][]);
  const center = Math.floor(matrixSize / 2);
  const clearance = children ? 4 : 0;
  const min = center - clearance;
  const max = center + clearance;

  const logoSize = Math.floor(size / 5);

  return (
    <div
      style={{ height: size, width: size }}
      className="bg-white p-5 flex flex-col relative rounded-xl"
    >
      {matrix2.map((row, yidx) => (
        <div key={yidx} className={cn("flex flex-1")}>
          {row.map((cell, xidx) => {
            const adjacents = getAdjacents(matrix2, xidx, yidx, { min, max });
            const radii = getRoundedCorners(adjacents);
            return (
              <div
                onClick={() => {
                  console.log(adjacents);
                }}
                style={{
                  borderRadius: `${radii.topLeft ? "50%" : "0"} ${
                    radii.topRight ? "50%" : "0"
                  } ${radii.bottomRight ? "50%" : "0"} ${
                    radii.bottomLeft ? "50%" : "0"
                  }`,
                }}
                key={xidx}
                className={cn(
                  "flex-1",
                  cell && (xidx < min || xidx > max || yidx < min || yidx > max)
                    ? "bg-black"
                    : "bg-white"
                )}
              />
            );
          })}
        </div>
      ))}
      {!!children && (
        <div
          style={{ height: logoSize, width: logoSize }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {children}
        </div>
      )}
    </div>
  );
};
