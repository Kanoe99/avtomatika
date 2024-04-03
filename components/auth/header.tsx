import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h2 className={cn("text-3xl font-semibold text-white", font.className)}>
        🔐 Auth
      </h2>
      <p className=" text-sm text-white/90">{label}</p>
    </div>
  );
};
