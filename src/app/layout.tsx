import { Header } from "@/components/common/Header";
import { StickyNav } from "@/components/common/StickyNav";
import { systemUi } from "@/fonts/config";
import { cn } from "@/utils/cn";
import { formatMetadata } from "@/utils/metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = formatMetadata({
  title: "David Sling | Web Developer & Designer",
  description: "The practical developer",
  image: "/cover.png",
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
        <StickyNav />
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
