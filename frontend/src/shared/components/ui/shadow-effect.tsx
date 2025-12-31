function ShadowEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden w-1/2 max-md:w-full">
      <div className="w-46 h-46 xl:h-96 xl:w-96  rounded-full bg-pink-500/15 blur-xl absolute top-1/6 left-1/4 animate-bubble-1"></div>
      <div className="w-46 h-46 xl:h-96 xl:w-96 rounded-full bg-purple-500/15 blur-xl absolute top-1/6 left-1/4 animate-bubble-2"></div>
      {children}
    </div>
  );
}

export default ShadowEffect;
