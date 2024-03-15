import { FlameBondLogo } from "@/assets/icons/FlameBondLogo";

export const FlameBondIllustration = () => (
  <div className="flex flex-1 bg-white">
    <div className="flex-[3] flex flex-col">
      <div className="bg-[#F57F17] flex-1 scale-[300%] -translate-x-[100px] z-10 -rotate-45" />
      <div className="bg-[#F4C240] flex-1 scale-[300%] -translate-x-[100px] rotate-45" />
    </div>
    <div className="flex-[2] flex items-center justify-center">
      <FlameBondLogo className="w-[75px] h-[75px] md:w-[150px] md:h-[150px]" />
    </div>
  </div>
);
