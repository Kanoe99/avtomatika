import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  iconSize: number | undefined | `${number}`;
  src: string;
  text: string;
  className?: string | undefined;
  link: string;
}

export const Logo = ({ iconSize, src, text, className, link }: LogoProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "bg-black/75 h-full rounded-md p-5 flex flex-col items-center justify-center cursor-pointer max-xl:w-full max-xl:h-[20rem] max-md:w-full max-sm:text-wrap max-sm:h-[15rem]",
        className
      )}
    >
      <Image
        src={`/logos/${src}`}
        alt="clickable image"
        width={iconSize}
        height={iconSize}
      />
      <h3 className="text-white text-[20px] mt-7 whitespace-nowrap max-sm:text-[1rem]">
        {text}
      </h3>
    </Link>
  );
};
