import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MdxCallout } from "./components/mdx/Callout";
import { MdxCard } from "./components/mdx/Card";
import { MdxCode } from "./components/mdx/Code";
import { cn } from "./utils/cn";
import { sentencize } from "./utils/format";

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
const components = {
  h1: ({ className, ...props }: HeadingProps) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HeadingProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HeadingProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HeadingProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HeadingProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HeadingProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: AnchorProps) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 opacity-95",
        className
      )}
      {...props}
    />
  ),
  ul: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) => <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />,
  ol: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >) => <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />,
  li: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) => <li className={cn("mt-2", className)} {...props} />,
  blockquote: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const fileName = sentencize(
      props.src?.split("?")[0].split("/").at(-1)
    ).split(".")[0];
    return (
      <div className="flex justify-center w-full">
        <Image
          className={cn("rounded-xl !m-0 w-full", className)}
          alt={fileName || "blog image"}
          src={props.src as string}
          width={400}
          height={100}
        />
      </div>
    );
  },
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-center py-1 text-sm flex justify-center" {...props} />
  ),
  hr: ({ ...props }) => <hr {...props} className="my-4 md:my-8 mx-auto" />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-primary-100", className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-dark-900 py-4 px-5",
        className
      )}
      {...props}
    />
  ),
  Image,
  code: MdxCode,
  Callout: MdxCallout,
  Card: MdxCard,
};

export function useMDXComponents(props: MDXComponents): MDXComponents {
  return {
    ...components,
    ...props,
  };
}
