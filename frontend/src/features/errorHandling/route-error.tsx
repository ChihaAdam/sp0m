import Return from "./return";

function RouteError({ error }: { error: any }) {
  const status = error.status;
  if (status === 404) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <img
          src="../../../public/errors/404.png"
          alt="404"
          className="w-1/3 mx-auto"
        />
        <Return />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-bold bg-grandiant text-transparent bg-clip-text">
        someting went wrong
      </h2>
      <Return />
    </div>
  );
}

export default RouteError;
