import useChangeAvatar from "./useChangeAvatar";
import useFetchUserInfo from "../../mainDashboardPage/useFetchUserInfo";
const avatars = [
  { name: "1", url: "/avatars/1.svg" },
  { name: "2", url: "/avatars/2.svg" },
  { name: "3", url: "/avatars/3.svg" },
  { name: "4", url: "/avatars/4.svg" },
  { name: "5", url: "/avatars/5.svg" },
  { name: "6", url: "/avatars/6.svg" },
  { name: "7", url: "/avatars/7.svg" },
  { name: "8", url: "/avatars/8.svg" },
];

function Avatar() {
  const changeAvatarMutation = useChangeAvatar();
  const { data } = useFetchUserInfo();
  const currentAvatarNumber = data?.avatarNumber;
  const handleAvatarChange = (avatarNumber: string) => {
    //if the avatar is already selected, do nothing (to prevent unnecessary requests)
    if (currentAvatarNumber === Number(avatarNumber)) return;
    changeAvatarMutation.mutate(avatarNumber);
  };
  return (
    <div>
      <h4 className="text-md mb-2">Avatar: </h4>
      <div className="grid grid-cols-4 gap-2 w-1/2">
        {avatars.map((avatar) => (
          <img
            key={avatar.name}
            src={avatar.url}
            alt={avatar.name}
            className={`w-16 h-16 border object-cover bg-black/20 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 ${
              currentAvatarNumber === Number(avatar.name)
                ? "scale-110  border-black dark:border-white"
                : "border-transparent"
            }`}
            onClick={() => handleAvatarChange(avatar.name)}
          />
        ))}
      </div>
    </div>
  );
}
export default Avatar;
