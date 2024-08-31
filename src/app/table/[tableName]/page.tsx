import MyTable from "@/Components/MyTable";

export default function TableName({ params }: { params: { tableName: string } }) {
  return (
    <div>
      <div className="my-2">page {params.tableName}</div>
      <MyTable tableName={params.tableName} />
    </div>
  );
}
