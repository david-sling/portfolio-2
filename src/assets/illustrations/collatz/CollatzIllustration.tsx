const bars = [
  { height: 80, cls: "h-[80%] group-hover:h-[65%]" },
  { height: 55, cls: "h-[55%] group-hover:h-[72%]" },
  { height: 90, cls: "h-[90%] group-hover:h-[76%]" },
  { height: 48, cls: "h-[48%] group-hover:h-[62%]" },
  { height: 68, cls: "h-[68%] group-hover:h-[52%]" },
  { height: 38, cls: "h-[38%] group-hover:h-[56%]" },
  { height: 52, cls: "h-[52%] group-hover:h-[40%]" },
  { height: 28, cls: "h-[28%] group-hover:h-[45%]" },
  { height: 40, cls: "h-[40%] group-hover:h-[28%]" },
  { height: 14, cls: "h-[14%] group-hover:h-[30%]" },
  { height: 22, cls: "h-[22%] group-hover:h-[14%]" },
  { height: 8,  cls: "h-[8%]  group-hover:h-[20%]" },
];

export const CollatzIllustration = () => (
  <div className="flex-1 bg-[#140f00] flex items-end justify-center gap-[5px] md:gap-[9px] px-8 md:px-14">
    {bars.map(({ height, cls }, i) => (
      <div
        key={i}
        className={`flex-1 rounded-t-md transition-all duration-600 ${cls}`}
        style={{
          backgroundColor: "#ffb703",
          opacity: 0.25 + (i / bars.length) * 0.1 + (height / 100) * 0.65,
          transitionDelay: `${i * 35}ms`,
        }}
      />
    ))}
  </div>
);
