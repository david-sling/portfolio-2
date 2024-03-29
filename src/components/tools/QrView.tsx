import { cn } from "@/utils/cn";
import QrCode from "@/utils/qr";
import { FC } from "react";

export const QrView: FC<{ content: string }> = ({ content }) => {
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
  const clearance = 4;
  const min = center - clearance;
  const max = center + clearance;

  return (
    <div className="bg-white p-5 h-[500px] w-[500px] flex flex-col">
      {matrix2.map((row, yidx) => (
        <div key={yidx} className={cn("flex flex-1")}>
          {row.map((cell, xidx) => (
            <div
              key={xidx}
              className={cn(
                "flex-1 rounded-full",
                cell && (xidx < min || xidx > max || yidx < min || yidx > max)
                  ? "bg-black"
                  : "bg-white"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
