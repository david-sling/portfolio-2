import { Logo } from "@/assets/icons/Logo";
import { Section } from "./Section";
import Link from "next/link";

export const Header = () => (
  <Section
    className="bg-dark-900 py-2 md:py-5 sticky top-0 z-10"
    innerClassName="flex items-center justify-center md:justify-between space-x-5"
  >
    <Link href="/#hero">
      <div className="flex items-center justify-center md:justify-start">
        <div className="bg-primary-100 h-5 md:h-11 w-5 md:w-11 flex items-center justify-center rounded-full">
          <Logo className="fill-primary h2 md:h-5 w-2 md:w-5 md:translate-x-1" />
        </div>
        <h1 className="text-primary ml-2 text-xl md:text-2xl">
          david<span className="font-bold">Sling</span>
        </h1>
      </div>
    </Link>
    <div className="hidden md:flex items-center space-x-20">
      <Link href="/#work">
        <p className="text-lg font-semibold">Work</p>
      </Link>
      <Link href="/blogs">
        <p className="text-lg font-semibold">Blogs</p>
      </Link>
    </div>
  </Section>
);
