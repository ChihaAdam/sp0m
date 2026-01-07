type SwitchProps = {
  enabled: boolean;
  toggleEnabled: () => void;
};

function Switch({ enabled, toggleEnabled }: Readonly<SwitchProps>) {
  return (
    <div
      className={`aspect-video rounded-full  w-10 h-5 p-1 box-content cursor-pointer ${
        enabled ? "bg-zinc-800" : "bg-zinc-200"
      }`}
      onClick={toggleEnabled}
      role="switch"
      aria-checked={enabled}
    >
      <div
        className={`rounded-full aspect-square bg-white transition-all duration-300
                     w-5 border border-black/20 dark:border-white/20 ${
                       enabled ? "translate-x-5" : "translate-x-0"
                     }`}
      ></div>
    </div>
  );
}

export default Switch;
