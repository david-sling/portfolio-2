import { Header } from "@/components/common/Header";
import { systemUi } from "@/fonts/config";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import "./globals.css";
import { formatMetadata } from "@/utils/metadata";

export const metadata = formatMetadata({
  title: "David Sling | Web Developer & Designer",
  description: "The practical developer",
  image: "/logo.png",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={cn(
          "bg-dark text-white w-full overflow-x-hidden",
          systemUi.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
