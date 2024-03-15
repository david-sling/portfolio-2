import { LinkIcon } from "@/assets/icons/LinkIcon";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  name: string;
  description: ReactNode;
  stack: string[];
  color: `#${string}`;
  projectLink: string;
  illustration: ReactNode;
  className?: string;
}

export const WorkCard: FC<Props> = ({
  name,
  description,
  stack,
  color,
  projectLink,
  illustration,
  className,
}) => (
  <div
    className={cn(
      "flex -m-5 flex-col lg:odd:flex-row lg:even:flex-row-reverse",
      className
    )}
  >
    <div className="bg-dark-800 relative z-0 min-h-[118px] md:min-h-[257px] max-w-[800px] overflow-hidden flex-1 rounded-3xl m-5 flex">
      {illustration}
    </div>
    <div className="m-5 flex flex-col">
      <h3 style={{ color }} className="text-2xl md:text-6xl font-bold">
        {name}
      </h3>
      <p className="mt-1 md:mt-2 mb-2 md:mb-5 text-sm md:text-xl  lg:w-[570px]">
        {description}
      </p>
      <p className="mb-5 opacity-50 flex text-xs md:text-base">
        {stack.join(" + ")}
      </p>
      <Link target="_blank" className="mt-auto self-start" href={projectLink}>
        <button
          style={{ backgroundColor: `${color}10`, color }}
          className="flex items-center space-x-3 px-4 py-2 text-sm md:text-lg font-bold rounded-lg"
        >
          <LinkIcon fill={color} className="h-5 w-5 md:h-7 md:w-7" />
          <p>View Site</p>
        </button>
      </Link>
    </div>
  </div>
);
