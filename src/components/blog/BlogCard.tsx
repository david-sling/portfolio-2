import Image from "next/image";
import { Button } from "../common/Button";
import { FC } from "react";
import Link from "next/link";

export const BlogCard: FC<{
  cover: string;
  title: string;
  link: string;
}> = ({ cover, link, title }) => (
  <div className=" border border-[#1a1a1a] rounded-xl overflow-hidden">
    <Image
      src={cover}
      alt="blog cover"
      width={400}
      height={100}
      className="w-full"
    />
    <div className="p-5 flex flex-col items-start">
      <h2 className="mb-2 font-bold text-xl">{title}</h2>
      <Link href={link}>
        <Button>Read</Button>
      </Link>
    </div>
  </div>
);
