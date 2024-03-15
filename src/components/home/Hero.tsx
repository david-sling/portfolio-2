import { GitHubLogo } from "@/assets/icons/GitHubLogo";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { LinkedInLogo } from "@/assets/icons/LinkedInLogo";
import { LogoRipple } from "../common/LogoRipple";
import Link from "next/link";

export const Hero = () => (
  <Section>
    <div className="mt-20">
      <h1 className="text-7xl font-bold leading-[130%]">
        Meet your{" "}
        <span className="text-primary">
          <br />
          practical
        </span>{" "}
        developer
      </h1>
      <p className="text-white opacity-50 mb-5 text-2xl mt-2 font-medium">
        Building websites that have goals
      </p>
      <div className="flex items-center -mx-2 flex-wrap wrap">
        <Button className="m-2" size="lg">
          See my work
        </Button>
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
    <div className="flex justify-end items-center h-0 mt-40">
      <div className="w-0 ml-[100px]">
        <LogoRipple />
      </div>
    </div>
  </Section>
);
