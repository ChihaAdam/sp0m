type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  decription: string;
  imageURL: string;
};

function card({ title, decription, imageURL, ...props }: Readonly<CardProps>) {
  return (
    <div
      className="flex flex-col gap-4 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gray-100 dark:bg-zinc-800 dark:border-white/20 border border-black/20 rounded-md overflow-hidden cursor-pointer active:scale-100 active:shadow-sm"
      {...props}
    >
      <div className="flex flex-col gap-2 p-4 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm font-semibold opacity-50">{decription}</p>
      </div>
      <img
        className="h-48 aspect-video object-cover border-t border-black/20"
        src={imageURL}
        alt="cardimage"
      />
    </div>
  );
}

export default card;
