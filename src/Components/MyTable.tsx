import { getEntity } from "@/app/api/actions";

export default async function MyTable({ tableName }: { tableName: string }) {
  const data = await getEntity(tableName);

  const editRow = async () => {
    "use server";
    console.log("asd");
  };

  return (
    <div className="bg-slate-800 p-10 text-neutral-100">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Created</th>
            <th></th>
          </tr>
          {data.map((el) => (
            <tr key={el.id}>
              <td className="px-6">{el.name}</td>
              <td className="px-6">{el.active ? "Active" : "Inactive"}</td>
              <td className="px-6">{new Date(el.createdAt).toLocaleString()}</td>
              <td>
                <form action={editRow}>
                  <button>EDIT</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
