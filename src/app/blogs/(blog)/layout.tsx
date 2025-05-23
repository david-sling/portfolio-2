import { Section } from "@/components/common/Section";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Section className="my-10" innerClassName="max-w-[800px]">
        {children}
      </Section>
    </>
  );
}
