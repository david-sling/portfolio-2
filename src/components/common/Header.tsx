import { Logo } from "@/asstes/icons/Logo";
import { Section } from "./Section";

export const Header = () => (
  <Section className="bg-dark-800 py-5">
    <div className="flex items-center">
      <div className="bg-primary-100 h-11 w-11 flex items-center justify-center rounded-full">
        <Logo className="fill-primary h-5 w-5 translate-x-1" />
      </div>
      <h1 className="text-primary ml-2 text-2xl">
        david<span className="font-bold">Sling</span>
      </h1>
    </div>
  </Section>
);
