import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { Section } from "../common/Section";
import { MailIcon } from "@/assets/icons/MailIcon";

export const Contact = () => (
  <Section id="contact" className="py-10 pb-32 md:py-32 bg-dark-800">
    <h2 className="text-base md:text-3xl font-bold">
      <span className="text-primary">this.</span>contact
    </h2>
    <div className="mt-10 space-y-2">
      <a href="tel:+918072539328">
        <div className="flex items-center space-x-2">
          <PhoneIcon />
          <p className="text-base md:text-lg font-semibold">+91 80725 39328</p>
        </div>
      </a>
      <a href="mailto:me@davidsling.in">
        <div className="flex items-center space-x-2">
          <MailIcon />
          <p className="text-base md:text-lg font-semibold">me@davidsling.in</p>
        </div>
      </a>
    </div>
  </Section>
);
