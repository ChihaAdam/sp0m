export const LoadingSub = () => {
  return (
    <div className="size-60 rounded-full border-8 border-x-transparent border-t-pink-500 border-b-purple-500 animate-spin"></div>
  );
};

function Loading() {
  return (
    <div className="size-60 rounded-full border-8 border-x-transparent border-t-pink-500 border-b-purple-500 animate-spin fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
  );
}

export default Loading;
