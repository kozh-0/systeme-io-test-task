import { getEntity } from "@/app/api/actions";
import MyTable from "@/Components/MyTable";

export default async function TableName({ params }: { params: { tableName: string } }) {
  const data = (await getEntity(params.tableName as any)) as Record<string, any>[];

  // Перенаправить на 404 или свое
  if (!data.length) return <h2>No data</h2>;

  return (
    <>
      <MyTable
        dataList={data.map((obj) => Object.values(obj))}
        columnNames={Object.keys(data[0])}
      />
    </>
  );
}
