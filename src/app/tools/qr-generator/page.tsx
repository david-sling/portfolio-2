"use client";

import { Logo } from "@/assets/icons/Logo";
import { FileField } from "@/components/common/FileField";
import { Section } from "@/components/common/Section";
import { TextField } from "@/components/common/TextField";
import { QrView } from "@/components/tools/QrView";
import { useState } from "react";

const Page = () => {
  const [content, setContent] = useState("");
  const [logo, setLogo] = useState<string>("");

  return (
    <Section>
      <div className="flex my-10 gap-10">
        <div className="flex-1 space-y-5">
          <TextField label="Content" value={content} onChange={setContent} />
          <FileField label="Icon" src={logo} setSrc={setLogo} />
        </div>
        <QrView size={300} content={content}>
          <div className="bg-dark flex items-center justify-center h-full rounded-full">
            <Logo className="h-5 w-5 ml-1 fill-primary" />
          </div>
        </QrView>
      </div>
    </Section>
  );
};

export default Page;
