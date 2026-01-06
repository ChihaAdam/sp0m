import { useState } from "react";
import DropDownMenu from "../../../../shared/components/ui/drop-down-menu";
import { usePageDelete } from "./use-page-delete";
import { useParams } from "react-router-dom";
function DeletePage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const pageDelete = usePageDelete({ id: id! });
  const handleDelete = () => {
    setOpen(false);
    pageDelete.mutate();
  };
  return (
    <div className="flex-1 w-full">
      <button
        onClick={() => setOpen(true)}
        className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded flex-1 w-full"
      >
        Delete
      </button>
      <DropDownMenu isOpen={open}>
        <div className="bg-white dark:bg-zinc-800 p-4 w-xl flex flex-col gap-4 rounded-lg">
          <h5 className="text-2xl font-bold">delete page</h5>
          <p>Are you sure you want to delete this page?</p>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded flex-1 w-full"
          >
            Delete
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-white dark:bg-zinc-800 px-4 py-2 rounded flex-1 w-full"
          >
            Cancel
          </button>
        </div>
      </DropDownMenu>
    </div>
  );
}
export default DeletePage;
