import { Logo } from "@/assets/icons/Logo";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const StickyNav = () => {
  return (
    <div className="fixed md:hidden left-0 right-0 bottom-0 bg-dark-900 shadow p-5 flex items-end justify-center max-h-[60px] z-50">
      <div className="flex-1">
        <Link href="/blogs">
          <p className="text-center hover:text-primary text-sm font-semibold">
            Blogs
          </p>
        </Link>
      </div>
      <div className="max-h-[60px] max-w-[60px] flex items-center justify-center relative">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 60px, 0 60px)",
          }}
          className={cn(
            "min-h-[140px] min-w-[140px] pointer-events-none bg-primary-100 flex items-center justify-center rounded-full transition-all animate-pulse"
          )}
        >
          <div className="min-h-[100px] min-w-[100px] bg-primary-100 flex items-center justify-center rounded-full"></div>
        </div>
        <Link className="absolute block h-[60px] w-[60px]" href="/#hero">
          <div className="h-[60px] w-[60px] bg-primary rounded-full flex items-center justify-center">
            <Logo className="h-5 w-5 translate-x-1" />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <Link href="/#work">
          <p className="text-center hover:text-primary text-sm font-semibold">
            Work
          </p>
        </Link>
      </div>
    </div>
  );
};
