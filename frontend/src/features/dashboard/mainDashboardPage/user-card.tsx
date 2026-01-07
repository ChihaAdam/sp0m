import useFetchUserInfo from "./useFetchUserInfo";

function UserCard() {
  const { data, isLoading, error } = useFetchUserInfo();
  const avatarNumber = data?.avatarNumber;
  const avatarURL = avatarNumber ? `/avatars/${avatarNumber}.svg` : null;
  const secondStep = error ? "error" : data?.username;
  const username = isLoading ? "loading ..." : secondStep;
  return (
    <div className="flex  gap-2 items-center text-xl font-bold select-none">
      {avatarURL && <img src={avatarURL} alt="avatar" className="w-12 h-12" />}
      <p>{username}</p>
    </div>
  );
}

export default UserCard;
