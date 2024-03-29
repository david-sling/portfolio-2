"use client";

import { Section } from "@/components/common/Section";
import { QrView } from "@/components/tools/QrView";

const Page = () => {
  return (
    <Section>
      <div>
        <QrView content="https://davidsling.in" />
      </div>
    </Section>
  );
};

export default Page;
