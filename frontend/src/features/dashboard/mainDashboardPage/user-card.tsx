import useFetchUserInfo from "./useFetchUserInfo";

function UserCard() {
  const { data, isLoading, error } = useFetchUserInfo();
  const avatarNumber = data?.avatarNumber;
  const avatarURL = avatarNumber ? `/avatars/${avatarNumber}.svg` : null;
  const username = isLoading ? "loading ..." : error ? "error" : data?.username;
  return (
    <div className="flex  gap-2 items-center text-xl font-bold select-none">
      {avatarURL && <img src={avatarURL} alt="avatar" className="w-12 h-12" />}
      <p>{username}</p>
    </div>
  );
}

export default UserCard;
