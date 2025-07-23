import { FilmkitLogo } from "@/assets/icons/FilmkitLogo";

export const FilmkitIllustration = () => (
  <div className="flex-1 bg-[#FFC953] flex items-center">
    <div className="flex flex-1 items-center">
      <FilmkitLogo className="h-20 w-20 md:h-40 md:w-40 ml-20 md:ml-40 group-hover:ml-5 md:group-hover:ml-10 -mr-10 md:-mr-20 z-10 transition-all duration-1000" />
      <div className="bg-dark flex-1 h-[77px] md:h-[154px]" />
    </div>
  </div>
);
