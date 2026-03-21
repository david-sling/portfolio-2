"use client";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { systemUi } from "@/fonts/config";
import { copyToClipboard } from "@/utils/actions";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const MdxCode = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const isInline = !props["data-language" as keyof typeof props] && !className?.includes("language-");
  const codeRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [showCopiedCheck, setShowCopiedCheck] = useState(false);
  const copiedTimeout = useRef<NodeJS.Timeout>();
  const copiedCheckTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setMounted(true);
    return () => {
      if (copiedTimeout.current) {
        clearTimeout(copiedTimeout.current);
        clearTimeout(copiedCheckTimeout.current);
      }
    };
  }, []);

  if (isInline) {
    return (
      <code
        className={cn(
          "inline font-mono text-sm px-2 py-0.5 rounded-full bg-blue-950/40 text-blue-400/80 border border-blue-900/40",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }

  const toast = (
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
  );

  return (
    <>
      <code
        ref={codeRef}
        className={cn("relative block font-mono text-sm py-1", className)}
        {...props}
      >
        {children}
        <span
          onClick={() => {
            copyToClipboard(codeRef.current?.textContent ?? "");
            setShowCopied(true);
            setShowCopiedCheck(true);
            clearTimeout(copiedTimeout.current);
            copiedTimeout.current = setTimeout(() => {
              setShowCopied(false);
            }, 100);
            clearTimeout(copiedCheckTimeout.current);
            copiedCheckTimeout.current = setTimeout(() => {
              setShowCopiedCheck(false);
            }, 5000);
          }}
          className={cn(
            "absolute right-0 top-0 p-1 rounded border transition-all",
            showCopiedCheck
              ? "bg-green-500 border-green-950"
              : "bg-dark hover:bg-dark-800 border-dark-500 cursor-pointer group"
          )}
        >
          <span className="h-5 w-5 relative flex items-center justify-center">
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
          </span>
        </span>
      </code>
      {mounted && createPortal(toast, document.body)}
    </>
  );
};
