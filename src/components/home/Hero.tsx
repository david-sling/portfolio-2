import { GitHubLogo } from "@/assets/icons/GitHubLogo";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { LinkedInLogo } from "@/assets/icons/LinkedInLogo";
import { LogoRipple } from "../common/LogoRipple";
import Link from "next/link";
import { InstagramLogo } from "@/assets/icons/InstagramLogo";

export const Hero = () => (
  <Section id="hero" className="min-h-[calc(100vh-130px)] md:min-h-[unset]">
    <div className="my-5 md:my-32">
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
        <Link target="_blank" href="/resume.pdf">
          <Button className="m-2" size="lg">
            See my resume
          </Button>
        </Link>
        <div className="flex items-center space-x-5 m-2">
          <Link target="_blank" href="https://github.com/david-sling">
            <GitHubLogo />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/david-sling">
            <LinkedInLogo />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/davidsling.in">
            <InstagramLogo />
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
