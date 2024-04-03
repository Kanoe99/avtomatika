import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-r
    from-[#403582] from-10% via-[#5762cd] to-[#6454ba] to-90%">
      <Navbar />
      {children}
    </div>
  );
};
export default ProtectedLayout;
