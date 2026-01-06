import { useState } from "react";
import DropDownMenu from "../../../../shared/components/ui/drop-down-menu";
import { useAddPage } from "../use-add-page";
type AddGooglePageProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function AddGooglePage({ isOpen, setIsOpen }: AddGooglePageProps) {
  const [title, setTitle] = useState("");
  const disabled = !title.trim();
  const addPage = useAddPage();
  const handleAddPage = () => {
    addPage.mutate({
      title: title.trim(),
      type: "google",
    });
    setIsOpen(false);
  };
  return (
    <DropDownMenu isOpen={isOpen}>
      <div className="flex flex-col gap-4 p-4 rounded-lg w-xl mx-auto bg-white dark:bg-zinc-800">
        <h2 className="text-2xl font-bold">Add Google Page</h2>
        <input
          type="text"
          placeholder="Page Name"
          className="p-2 rounded-md border border-black/20 dark:border-white/20 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleAddPage}
          className="bg-gradiant text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled}
        >
          Add Instagram Page
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-white text-black  border border-black/20 dark:border-white/20 p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </DropDownMenu>
  );
}

export default AddGooglePage;
