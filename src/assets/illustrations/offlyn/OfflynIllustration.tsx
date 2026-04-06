import { OfflynLogo } from "@/assets/icons/OfflynLogo";

export const OfflynIllustration = () => (
  <div className="flex-1 bg-[#FF6B9F] flex items-center justify-center relative overflow-hidden">
    <div className="absolute rounded-full bg-white/30 w-[100px] h-[100px] md:w-[160px] md:h-[160px] scale-100 group-hover:scale-[3] transition-all duration-1000" />
    <div className="absolute rounded-full bg-white/20 w-[100px] h-[100px] md:w-[160px] md:h-[160px] scale-100 group-hover:scale-[4.5] transition-all duration-1000 delay-75" />
    <div className="absolute rounded-full bg-white/10 w-[100px] h-[100px] md:w-[160px] md:h-[160px] scale-100 group-hover:scale-[6] transition-all duration-1000 delay-150" />
    <OfflynLogo className="relative z-10 w-[55px] h-[44px] md:w-[99px] md:h-[79px]" />
  </div>
);
