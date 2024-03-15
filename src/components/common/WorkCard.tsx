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
  <div className={cn("flex -m-5 even:flex-row-reverse", className)}>
    <div className="bg-dark-800 h-[257px] max-w-[800px] overflow-hidden flex-1 rounded-3xl m-5 flex">
      {illustration}
    </div>
    <div className="m-5 flex flex-col">
      <h3 style={{ color }} className="text-6xl font-bold">
        {name}
      </h3>
      <p className="mt-2 mb-5 text-xl max-w-[570px] w-[570px]">{description}</p>
      <p className="mb-5 opacity-50 flex">{stack.join(" + ")}</p>
      <Link target="_blank" className="mt-auto self-start" href={projectLink}>
        <button
          style={{ backgroundColor: `${color}10`, color }}
          className="flex items-center space-x-2 px-4 py-2 text-lg font-bold rounded-lg"
        >
          <LinkIcon fill={color} />
          View Site
        </button>
      </Link>
    </div>
  </div>
);
