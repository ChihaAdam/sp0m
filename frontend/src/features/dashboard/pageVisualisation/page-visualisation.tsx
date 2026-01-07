import { usePageVisualisation } from "./use-page-visualisation";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import Victims from "./victims";
import DeletePage from "./delete-page/delete-page";
import UpdatePage from "./update-page/update-page";
import Loading from "../../../shared/components/ui/loading";
function PageVisualisation() {
  const { id } = useParams();
  const { data, isLoading, error } = usePageVisualisation({ id: id! });
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  const victims = data?.victims;
  const page = data?.page;
  const createdAt = format(new Date(page?.createdAt), "PPpp");
  const updatedAt = format(new Date(page?.updatedAt), "PPpp");
  const pageVictimsCount = victims?.length;
  const pageURL = `${import.meta.env.VITE_FRONTEND_URL}/${page?.type}/${id}`;
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold bg-gradiant text-transparent bg-clip-text border-b border-black/20 dark:border-white/20 pb-4">
        page title:{" "}
        <span className="text-black dark:text-white font-normal">
          {page?.title}
        </span>
      </h2>
      <div className="flex max-md:flex-col gap-2 w-full">
        <UpdatePage />
        <DeletePage />
      </div>
      <div className="flex flex-col gap-2 border-b border-black/20 dark:border-white/20 pb-4">
        {" "}
        <p>
          <span className="font-bold">URL:</span>{" "}
          <Link
            to={pageURL}
            className="underline text-blue-800 hover:text-blue-600 font-semibold max-md:w-fit break-all"
          >
            {pageURL}
          </Link>
        </p>
        <p>
          <span className="font-bold">type:</span> {page?.type}
        </p>
        <p>
          <span className="font-bold">Created at:</span> {createdAt}
        </p>
        <p>
          <span className="font-bold">Updated at:</span> {updatedAt}
        </p>
        <p>
          <span className="font-bold">Number of victims:</span>{" "}
          {pageVictimsCount}
        </p>
      </div>
      <Victims victims={victims} />
    </div>
  );
}

export default PageVisualisation;
