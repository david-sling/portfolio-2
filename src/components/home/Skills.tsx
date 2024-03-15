import { JSXIcon } from "@/assets/icons/JSXIcon";
import { Section } from "../common/Section";
import { SkillCard } from "../common/SkillCard";
import { GearIcon } from "@/assets/icons/GearIcon";
import { PaintRollerIcon } from "@/assets/icons/PaintRollerIcon";

export const Skills = () => (
  <Section className="bg-dark-800 py-32">
    <h2 className="text-3xl font-bold">
      <span className="text-primary">this.</span>skills
    </h2>
    <div className="flex -mx-5">
      <SkillCard
        label="Frontend"
        icon={<JSXIcon />}
        className="flex-1 m-5"
        skills={[
          "React JS + Next JS",
          "React Native",
          "Typescript",
          "HTML + CSS + Javascript",
          "Web3 JS + Metamask",
        ]}
      />
      <SkillCard
        label="Backend"
        icon={<GearIcon />}
        className="flex-1 m-5"
        skills={[
          "Node JS",
          "Firebase",
          "Mongo DB",
          "SQL",
          "Sockets",
          "AWS",
          "Github Actions",
        ]}
      />
      <SkillCard
        label="Design"
        icon={<PaintRollerIcon />}
        className="flex-1 m-5"
        skills={[
          "Figma",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Illustration",
        ]}
      />
    </div>
  </Section>
);
