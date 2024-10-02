"use client";

import { Logo } from "@/assets/icons/Logo";
import { Section } from "@/components/common/Section";
import { QrView } from "@/components/tools/QrView";

const Page = () => {
  return (
    <Section>
      <div>
        <QrView size={300} content="https://davidsling.in">
          <div className="bg-dark flex items-center justify-center h-full rounded-full">
            <Logo className="h-5 w-5 ml-1 fill-primary" />
          </div>
        </QrView>
      </div>
    </Section>
  );
};

export default Page;
