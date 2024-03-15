import { GitHubLogo } from "@/assets/icons/GitHubLogo";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { LinkedInLogo } from "@/assets/icons/LinkedInLogo";
import { LogoRipple } from "../common/LogoRipple";
import Link from "next/link";

export const Hero = () => (
  <Section>
    <div className="my-20">
      <h1 className="text-3xl text-center md:text-start md:text-7xl font-bold leading-[130%]">
        Meet your{" "}
        <span className="text-primary text-7xl">
          <br />
          practical
        </span>{" "}
        <br className="md:hidden" />
        developer
      </h1>
      <p className="text-white text-center md:text-start opacity-50 md:mb-5 text-lg md:text-2xl my-10 md:mt-2 font-medium">
        Building web apps that have goals
      </p>
      <div className="flex items-center -mx-2 flex-wrap wrap flex-col md:flex-row">
        <a href="#work">
          <Button className="m-2" size="lg">
            See my work
          </Button>
        </a>
        <div className="flex items-center space-x-5 m-2">
          <Link target="_blank" href="https://github.com/david-sling">
            <GitHubLogo />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/david-sling">
            <LinkedInLogo />
          </Link>
        </div>
      </div>
    </div>
    <div className="justify-end items-center h-0 mt-20 hidden md:flex">
      <div className="w-0 ml-[100px]">
        <LogoRipple />
      </div>
    </div>
  </Section>
);
