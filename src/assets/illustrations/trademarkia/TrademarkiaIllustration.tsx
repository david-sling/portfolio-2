import { TrademarkiaLogo } from "@/assets/images";

export const TrademarkiaIllustration = () => (
  <div className="flex flex-1 bg-[#F26321] justify-end">
    <div className="flex flex-1 bg-[#2D75E1] rounded-tl-full min-w-[110%]">
      <div className="flex ml-24 flex-1 bg-[#073A88] rounded-tl-full">
        <div className="ml-32 flex-1 bg-white rounded-tl-full flex items-center justify-center">
          <TrademarkiaLogo height={150} width={150} />
        </div>
      </div>
    </div>
  </div>
);
