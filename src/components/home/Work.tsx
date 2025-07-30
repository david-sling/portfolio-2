import { DomainmarkiaIllustration } from "@/assets/illustrations/domainmarkia/DomainmarkiaIllustration";
import { Section } from "../common/Section";
import { WorkCard } from "../common/WorkCard";
import { TrademarkiaIllustration } from "@/assets/illustrations/trademarkia/TrademarkiaIllustration";
import { IncdecentralIllustration } from "@/assets/illustrations/incdecentral/IncdecentralIllustration";
import { FlameBondIllustration } from "@/assets/illustrations/flamebond/FlameBondIllustration";
import { CryptoSenderIllustration } from "@/assets/illustrations/cryptosender/CryptoSenderIllustration";
import { FilmkitIllustration } from "@/assets/illustrations/filmkit/FilmkitIllustration";

export const Work = () => (
  <Section id="work" className="py-10 md:py-32">
    <h2 className="text-base md:text-3xl font-bold">
      <span className="text-primary">this.</span>work
    </h2>
    <div className="mt-10 space-y-10 md:space-y-20">
      <WorkCard
        name="domainmarkia"
        description="A domain marketplace and trademark filing in one. The domain search results are fetched serverside. The blogs are fetched from Notion during build time. The legal pages are rendered directly from md files using contentlayer. The cart resides on a global context and updates realtime with user interactions."
        stack={["Next JS", "Notion API", "contentlayer", "TypeScript"]}
        color="#7C57E3"
        projectLink="https://domainmarkia.com"
        illustration={<DomainmarkiaIllustration />}
      />
      <WorkCard
        name="filmkit.ai"
        description="AI tools for every frame."
        stack={["Next JS", "TypeScript"]}
        color="#FFC953"
        projectLink="https://filmkit.ai"
        illustration={<FilmkitIllustration />}
      />
      <WorkCard
        name="incdecentral"
        description="IncDecentral is a service that makes Business Incorporation easier. This is one of the projects we built at Trademarkia. My role was to build the entire frontend."
        stack={["Next JS", "TypeScript"]}
        color="#EC4380"
        projectLink="https://incdecentral.com"
        illustration={<IncdecentralIllustration />}
      />
      <WorkCard
        name="trademarkia"
        description="A website to help you file trademarks with ease. I worked on the search engine (frontend) and blogs (frontend & backend)"
        stack={["Next JS", "Firebase", "Node JS", "TypeScript"]}
        color="#2D75E1"
        projectLink="https://trademarkia.com"
        illustration={<TrademarkiaIllustration />}
      />
      <WorkCard
        name="cryptosender"
        description="A DeFi application to split and send cryptocurrency to multiple wallets. "
        stack={["React JS", "Ethers JS", "Metamask"]}
        color="#9E74C8"
        projectLink="https://cryptosender.davidsling.in"
        illustration={<CryptoSenderIllustration />}
      />
      <WorkCard
        name="flamebond"
        description="A Content Management System that auto generates API endpoints for CRUD applications"
        stack={["React JS", "Firebase", "Node JS"]}
        color="#F57F17"
        projectLink="https://flamebond.davidsling.in"
        illustration={<FlameBondIllustration />}
      />
    </div>
  </Section>
);
