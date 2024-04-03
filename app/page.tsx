import { Poppins } from "next/font/google";
import { Welcome } from "@/components/landing page/welcome-section";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main
      className="flex flex-col h-fit justify-between bg-gradient-to-r
     from-[#403582] from-10% via-[#5762cd] to-[#6454ba] to-90% touch-none"
    >
      <div className="bg-[url('grid.png')] z-0">
        <Welcome />
      </div>
    </main>
  );
}
