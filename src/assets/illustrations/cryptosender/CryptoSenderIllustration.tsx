import { CryptoSenderLogo } from "@/assets/icons/CryptoSenderLogo";

export const CryptoSenderIllustration = () => (
  <div className="flex flex-1 bg-white">
    <div className="flex-[2] group-hover:flex-[12] transition-all duration-1000 flex items-center justify-center">
      <CryptoSenderLogo className="w-[75px] h-[75px] md:w-[150px] md:h-[150px]" />
    </div>
    <div className="flex-[1] flex flex-col">
      <div className="bg-[#9E74C8] flex-1 scale-[300%] translate-x-[100px] z-10 rotate-45" />
      <div className="bg-[#9E74C8] flex-1 scale-[300%] translate-x-[100px] -rotate-45" />
    </div>
  </div>
);
