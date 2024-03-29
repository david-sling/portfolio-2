"use client";

import { Section } from "@/components/common/Section";
import { QrView } from "react-dynamic-qr";

const Page = () => {
  return (
    <Section>
      <div>
        <QrView size={300} content="https://davidsling.in" />
      </div>
    </Section>
  );
};

export default Page;
