import Card from "../../../shared/components/ui/card";
import Loading from "../../../shared/components/ui/loading";
import useFetchPages from "./useFetchPages";
import { useNavigate } from "react-router-dom";
type Page = {
  _id: string;
  title: string;
  type: string;
};
const coverImages = {
  facebook: "../../../../../public/covers/facebook-cover.jpg",
  instagram: "../../../../../public/covers/instagram-cover.jpg",
  google: "../../../../../public/covers/gmail-cover.jpg",
};
function PagesDashboard() {
  const { data, isLoading, error } = useFetchPages();
  const navigate = useNavigate();
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradiant bg-clip-text">
        Pages
      </h2>
      {data.length === 0 ? (
        <p className="text-center w-full border-y border-black/20 py-2">
          No pages found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((page: Page) => (
            <Card
              key={page._id}
              title={page.title}
              decription={page.type}
              imageURL={coverImages[page.type as keyof typeof coverImages]}
              onClick={() => navigate(`/admin/pages/${page._id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default PagesDashboard;
