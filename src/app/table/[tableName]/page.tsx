import { getEntity } from "@/app/api/actions";
import MyTable from "@/Components/MyTable";

export default async function TableName({ params }: { params: { tableName: string } }) {
  const data = (await getEntity(params.tableName)) as any[];

  // Перенаправить на 404 или свое
  if (!data.length) return <h2>No data</h2>;

  return (
    <div>
      <div className="my-2">{params.tableName}</div>
      <MyTable data={data} />
    </div>
  );
}
