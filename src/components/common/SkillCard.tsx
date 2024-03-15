import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

interface Props {
  label: string;
  icon: ReactNode;
  skills: string[];
  className?: string;
}

export const SkillCard: FC<Props> = ({ label, icon, skills, className }) => (
  <div
    className={cn(
      "flex-1 min-w-[250px] md:min-w-[300px] bg-dark p-5 rounded-xl",
      className
    )}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-xl md:text-3xl font-bold text-primary">{label}</h3>
      <div className="scale-75 md:scale-100">{icon}</div>
    </div>
    <ul className="list-disc p-5 text-sm md:text-xl leading-[280%]">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);
