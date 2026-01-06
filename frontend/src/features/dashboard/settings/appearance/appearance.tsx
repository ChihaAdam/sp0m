import DarkMode from "./darkmode";
import Avatar from "./avatar";
function Appearance() {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-teal-300/20">
      <div className="flex gap-2 items-center mb-2">
        <div className="size-4 bg-teal-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-teal-600 p-0"> appeareance</h3>
      </div>
      <div className="px-4 flex flex-col gap-2 font-semibold">
        <DarkMode />
        <Avatar />
      </div>
    </div>
  );
}

export default Appearance;
