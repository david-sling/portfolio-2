import { Section } from "./Section";

export const Footer = () => (
  <Section
    className="bg-dark-900 py-10 pb-32 md:pb-10 mt-auto"
    innerClassName="flex flex-col items-center"
  >
    <div className="w-fit flex flex-col items-center gap-2">
      <p className="text-center">
        Anything that can be written in TypeScript, Will eventually be written
        in TypeScript.
      </p>
      <p className="md:self-end text-primary md:-mr-5 text-sm">
        - Jeff Delaney
      </p>
    </div>
  </Section>
);
