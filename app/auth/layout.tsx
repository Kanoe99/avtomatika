const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-[calc(100vh_-_4rem)] flex items-center justify-center bg-gradient-to-r
    from-[#403582] from-10% via-[#5762cd] to-[#6454ba] to-90%"
    >
      {children}
    </div>
  );
};
export default AuthLayout;
