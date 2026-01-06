import InstagramCard from "./instagram/instagram-card";
import FacebookCard from "./facebook/facebook-card";
import GoogleCard from "./google/google-card";
function CreatePageMainMenu() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold bg-gradiant text-transparent bg-clip-text">
        available networks
      </h2>
      <div className="flex gap-4 justify-around">
        <InstagramCard />
        <FacebookCard />
        <GoogleCard />
      </div>
    </div>
  );
}
export default CreatePageMainMenu;
