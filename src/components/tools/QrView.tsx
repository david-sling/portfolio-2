import { cn } from "@/utils/cn";
import QrCode from "@/utils/qr";
import { FC } from "react";

export const QrView: FC<{ content: string }> = ({ content }) => {
  const matrix = (QrCode as any).generate(content).buffer as number[];
  console.log(matrix);
  const size = Math.sqrt(matrix.length);
  const matrix2 = matrix.reduce((acc, cell, idx) => {
    const row = Math.floor(idx / size);
    if (!acc[row]) acc[row] = [];
    acc[row].push(cell);
    return acc;
  }, [] as number[][]);
  const center = Math.floor(size / 2);
  const clearance = 2;
  const min = center - clearance;
  const max = center + clearance;
  return (
    <div className="bg-white p-5">
      {matrix2.map((row, yidx) => (
        <div key={yidx} className={cn("flex")}>
          {row.map((cell, xidx) => (
            <div
              key={xidx}
              className={cn(
                "w-5 h-5 rounded-full",
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
