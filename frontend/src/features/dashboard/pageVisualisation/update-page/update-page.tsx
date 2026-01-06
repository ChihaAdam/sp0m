import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePageUpdateName } from "./use-page-update-name";
import DropDownMenu from "../../../../shared/components/ui/drop-down-menu";
function UpdatePage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pageUpdateName = usePageUpdateName();
  const disabled = title.trim() === "";

  const handleUpdate = () => {
    setIsOpen(false);
    pageUpdateName.mutate({ id: id!, title: title });
  };
  return (
    <div className="flex-1">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded w-full"
      >
        Update
      </button>
      <DropDownMenu isOpen={isOpen}>
        <div className="flex flex-col gap-2 p-4 w-xl bg-white dark:bg-zinc-800 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Update page name</h3>
          <input
            type="text"
            className="border border-black/20 dark:border-white/20 rounded px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
          >
            Update
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white dark:bg-zinc-800 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </DropDownMenu>
    </div>
  );
}

export default UpdatePage;
