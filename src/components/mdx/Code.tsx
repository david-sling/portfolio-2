"use client";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { systemUi } from "@/fonts/config";
import { copyToClipboard } from "@/utils/actions";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const MdxCode = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const [showCopied, setShowCopied] = useState(false);
  const [showCopiedCheck, setShowCopiedCheck] = useState(false);
  const copiedTimeout = useRef<NodeJS.Timeout>();
  const copiedCheckTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
        clearTimeout(copiedCheckTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <code
        className={cn("relative block font-mono text-sm py-1", className)}
        {...props}
      >
        {children}
        <div
          onClick={() => {
            copyToClipboard(children as string);
            setShowCopied(true);
            setShowCopiedCheck(true);
            clearTimeout(copiedTimeout.current);
            copiedTimeout.current = setTimeout(() => {
              console.log("clearing");
              setShowCopied(false);
            }, 100);
            clearTimeout(copiedCheckTimeout.current);
            copiedCheckTimeout.current = setTimeout(() => {
              setShowCopiedCheck(false);
            }, 5000);
          }}
          className={cn(
            "absolute right-0 top-0  p-1 rounded border transition-all",
            showCopiedCheck
              ? "bg-green-500 border-green-950"
              : "bg-dark hover:bg-dark-800 border-dark-500 cursor-pointer group"
          )}
        >
          <div className="h-5 w-5 relative flex items-center justify-center">
            <CheckIcon
              className={cn(
                "transition-all",
                showCopiedCheck ? "" : "opacity-0 pointer-events-none"
              )}
            />
            <CopyIcon
              className={cn(
                "opacity-60 hover:opacity-100 transition-all absolute",
                showCopiedCheck ? "opacity-0 pointer-events-none" : ""
              )}
            />
          </div>
        </div>
      </code>
      <div
        className={cn(
          "fixed pointer-events-none flex items-center space-x-4 left-1/2 -translate-x-1/2 bottom-5 bg-dark-900 p-2 pl-4 rounded border border-dark-500 transition-all",
          systemUi.className,
          showCopied ? "" : "opacity-0 translate-y-1"
        )}
        style={{ transitionDuration: showCopied ? "100ms" : "3000ms" }}
      >
        <p className="">Copied to clipboard</p>
      </div>
    </>
  );
};
