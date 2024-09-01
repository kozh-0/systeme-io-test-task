"use client";
import { capitalizeFirstLetter, isDateValid } from "@/Helper";

export default function MyTable({ data }: { data: Record<string, any>[] }) {
  const editRow = (row: any) => {
    console.log(row);
    alert(row);
  };

  const formatCell = (cell: any) => {
    let output;

    switch (typeof cell) {
      case "number":
        output = cell.toString();
        break;
      case "boolean":
        output = (
          <span className={`${cell ? "bg-green-500" : "bg-red-500"} p-1 rounded-md`}>
            {cell ? "Yes" : "No"}
          </span>
        );
        break;
      case "object":
        output = JSON.stringify(cell, null, 2);
        break;
      case "string":
        if (isDateValid(cell)) {
          output = new Date(cell).toLocaleString();
          break;
        }
        output = cell;
        break;

      default:
        break;
    }
    return (
      <td key={cell} className="px-4 py-2">
        {output}
      </td>
    );
  };

  const arrayOfValues = data.map((obj) => Object.values(obj));

  // Еще можно добавить виртуализацию
  return (
    <div className="bg-slate-800 p-10 text-neutral-100">
      <table className="min-w-full border-gray-300">
        <tbody>
          <tr className="bg-gray-100 text-slate-700">
            {Object.keys(data[0]).map((columnTitle) => (
              <th key={columnTitle} className="px-4 py-2 text-left">
                {capitalizeFirstLetter(columnTitle)}
              </th>
            ))}
            <th></th>
          </tr>
          {arrayOfValues.map((row) => {
            return (
              <tr key={row[0]} className="border-b-2 border-gray-300 px-4 py-2">
                <>
                  {row.map((cell) => formatCell(cell))}
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded "
                      onClick={() => editRow(row)}
                    >
                      Edit
                    </button>
                  </td>
                </>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
