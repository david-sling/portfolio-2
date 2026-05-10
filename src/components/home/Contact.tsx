import { MailIcon } from "@/assets/icons/MailIcon";
import Link from "next/link";
import { Section } from "../common/Section";

export const Contact = () => (
  <Section id="contact" className="py-10 pb-32 md:py-32 bg-dark-800">
    <h2 className="text-base md:text-3xl font-bold">
      <span className="text-primary">this.</span>contact
    </h2>
    <div className="mt-10 space-y-2">
      <Link href="mailto:me@davidsling.in">
        <div className="flex items-center space-x-2">
          <MailIcon />
          <p className="text-base md:text-lg font-semibold">me@davidsling.in</p>
        </div>
      </Link>
    </div>
  </Section>
);
