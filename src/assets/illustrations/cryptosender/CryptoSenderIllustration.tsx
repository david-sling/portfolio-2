import { CryptoSenderLogo } from "@/assets/icons/CryptoSenderLogo";

export const CryptoSenderIllustration = () => (
  <div className="flex flex-1 bg-white">
    <div className="flex-[2] flex items-center justify-center">
      <CryptoSenderLogo />
    </div>
    <div className="flex-[1] flex flex-col">
      <div className="bg-[#9E74C8] flex-1 scale-[300%] translate-x-[100px] z-10 rotate-45" />
      <div className="bg-[#9E74C8] flex-1 scale-[300%] translate-x-[100px] -rotate-45" />
    </div>
  </div>
);
